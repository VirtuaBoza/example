import React from "react";
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
    this._counter++;
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
