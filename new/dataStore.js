import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";

export class DataStore {
  data = [];
  counter;

  constructor({ counter = 0 } = {}) {
    makeAutoObservable(this);
    this.counter = counter;
  }
}

let dataStore = new DataStore();

export const DataStoreContext = React.createContext(dataStore);

export const DataStoreProvider = ({ store, children }) => {
  if (store) {
    Object.assign(dataStore, store);
  }

  return (
    <DataStoreContext.Provider value={dataStore}>
      {children}
    </DataStoreContext.Provider>
  );
};

export const withDataStore = (WrappedComponent) => {
  return React.forwardRef((props, ref) => {
    const dataStoreFromContext = useContext(DataStoreContext);
    return (
      <WrappedComponent ref={ref} dataStore={dataStoreFromContext} {...props} />
    );
  });
};

export default dataStore;
