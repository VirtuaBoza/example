import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";

export class DataStore {
  _counter;
  get counter() {
    return this._counter;
  }

  constructor({ counter = 0, data = [] } = {}) {
    this._counter = counter;
    this.data = data;
    makeAutoObservable(this);
  }

  incrementCounter() {
    this.counter++;
  }
}

export const DataStoreContext = React.createContext();

export const DataStoreProvider = ({ store = new DataStore(), children }) => {
  return (
    <DataStoreContext.Provider value={store}>
      {children}
    </DataStoreContext.Provider>
  );
};

// For injecting the service as a prop into Class Components.
// Function Components can use useContext(DataStoreContext) directly.
export function withDataStore(WrappedComponent) {
  return React.forwardRef((props, ref) => {
    const dataStore = useContext(DataStoreContext);
    return <WrappedComponent ref={ref} dataStore={dataStore} {...props} />;
  });
}
