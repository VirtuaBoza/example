/**
 * This is a "Provider" - a specific implementation of an integration with some external system
 */
class ProviderOne {
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  fetchData() {
    return Promise.resolve([]);
  }
}

export default ProviderOne;
