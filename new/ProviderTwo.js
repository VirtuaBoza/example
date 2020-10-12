/**
 * This is a "Provider" - a specific implementation of an integration with some external system.
 * This particular provider has a dependency on a global store.
 */
class ProviderTwo {
  constructor(dataStore) {
    this._dataStore = dataStore;
  }

  fetchData() {
    return Promise.resolve(
      [].filter((item) => item.id === this._dataStore.otherData)
    );
  }
}

export default ProviderTwo;
