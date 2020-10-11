/**
 * This is a "Provider" - a specific implementation of an integration with some external system
 */
class ProviderOne {
  fetchData() {
    return Promise.resolve([]);
  }
}

export default ProviderOne;
