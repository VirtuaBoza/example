import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";

export class ConfigStore {
  constructor({
    provider = "ProviderOne",
    component = { reloadEnabled: true },
    darkMode = false,
  } = {}) {
    this.provider = provider;
    this.component = component;
    this.darkMode = darkMode;
    makeAutoObservable(this);
  }
}

export const ConfigStoreContext = React.createContext();

export const ConfigStoreProvider = ({
  store = new ConfigStore(),
  children,
}) => {
  return (
    <ConfigStoreContext.Provider value={store}>
      {children}
    </ConfigStoreContext.Provider>
  );
};

// For injecting the service as a prop into Class Components.
// Function Components can use useContext(ConfigStoreContext) directly.
export function withConfigStore(WrappedComponent) {
  return React.forwardRef((props, ref) => {
    const configStore = useContext(ConfigStoreContext);
    return <WrappedComponent ref={ref} configStore={configStore} {...props} />;
  });
}
