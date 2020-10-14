import React, { useState } from "react";
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

export const ConfigStoreProvider = ({ store, children }) => {
  const [state] = useState(() => store || new ConfigStore());
  return (
    <ConfigStoreContext.Provider value={state}>
      {children}
    </ConfigStoreContext.Provider>
  );
};
