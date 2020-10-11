import dataStore from "./dataStore";

/**
 * This is a "Provider" - a specific implementation of an integration with some external system.
 * This particular provider has a dependency on a global store.
 */
class ProviderTwo {
  fetchData() {
    return Promise.resolve([].filter((item) => item.id === dataStore.counter));
  }
}

export default ProviderTwo;
