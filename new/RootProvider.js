import React from "react";
import { ConfigStoreProvider } from "./ConfigStore";
import { DataStoreProvider } from "./DataStore";
import { ServiceProvider } from "./ServiceContext";

const RootProvider = ({ children }) => {
  return (
    <ConfigStoreProvider>
      <DataStoreProvider>
        <ServiceProvider>{children}</ServiceProvider>
      </DataStoreProvider>
    </ConfigStoreProvider>
  );
};

export default RootProvider;
