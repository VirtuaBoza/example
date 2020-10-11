import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ConfigStoreContext } from "./ConfigStore";
import { DataStoreContext } from "./DataStore";

// Here we create a ServiceContext so that we can wrap the app
// in a single ServiceContext.Provider which maintains the
// single-instance concept while ditching the singleton pattern
// and allowing dependencies to be supplied via Context.
const ServiceContext = React.createContext();

// The ServiceProvider contains the definitions of Service functions.
// It gets its Store dependencies via Context,
// and resolves its Provider dependency(/ies) based on config.
export const ServiceProvider = ({ children }) => {
  const configStore = useContext(ConfigStoreContext);
  const dataStore = useContext(DataStoreContext);

  const [provider, setProvider] = useState();

  useEffect(() => {
    (async () => {
      if (configStore.provider) {
        const Provider = await import(`./${configStore.provider}`);
        setProvider(new Provider(dataStore));
      }
    })();
  }, [configStore.provider, dataStore]);

  const fetchData = useCallback(() => {
    provider.fetchData().then((data) => {
      dataStore.data.push(...data);
    });
  }, [provider, dataStore]);

  const service = useMemo(() => {
    initialized = Boolean(provider);
    fetchData;
  }, [provider, fetchData]);

  return (
    <ServiceContext.Provider value={service}>
      {children}
    </ServiceContext.Provider>
  );
};

// For injecting the service as a prop into Class Components.
// Function Components can use useContext(ServiceContext) directly.
export function withService(WrappedComponent) {
  return React.forwardRef((props, ref) => {
    const service = useContext(ServiceContext);
    return <WrappedComponent ref={ref} service={service} {...props} />;
  });
}

export default ServiceContext;
