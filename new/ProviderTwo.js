/**
 * This is a "Provider" - a specific implementation of an integration with some external system.
 * This particular provider has a dependency on a global store.
 */
class ProviderTwo {
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  fetchData() {
    return Promise.resolve(
      [].filter((item) => item.id === this.dataStore.otherData)
    );
  }
}

export default ProviderTwo;
