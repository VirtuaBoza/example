/**
 * This is a "Manager" which is responsible for instantiating a specific "Provider"
 * based on config and passing all calls through to that provider.
 */
class Manager {
  async init(config) {
    this.provider = await import(config);
  }

  fetchData() {
    return this.provider.fetchData();
  }
}

export default Manager;
