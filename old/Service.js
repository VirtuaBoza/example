import Manager from "./Manager";
import configStore from "./ConfigStore";
import dataStore from "./DataStore";

const manager = new Manager();

let service;

/**
 * This is a Service, the outermost layer of some integration to be implemented in one or many "Providers"
 * It provides an abstraction over one or many managers and updates global state.
 * It is a singleton, and "initialized" when the App component mounts.
 */
class Service {
  constructor() {
    if (service) return service;
    service = this;
  }

  async init() {
    await manager.init(configStore.provider);
  }

  fetchData() {
    manager.fetchData().then((data) => {
      dataStore.data.push(...data);
    });
  }
}

export default Service;
