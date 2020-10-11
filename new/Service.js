import Manager from "./Manager";
import configStore from "./configStore";
import dataStore from "./dataStore";

const manager = new Manager();

let service;

/**
 * This is a Service, the outermost layer of some integration to be implemented in one or many "Providers"
 * It provides an abstraction over one or many managers and updates global state.
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
    console.log(dataStore.counter);
    manager.fetchData().then((data) => {
      console.log(data);
      dataStore.data.concat(data);
    });
  }
}

export default Service;
