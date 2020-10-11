// This is what our service mocks look like
let instance;
export default class MockManager {
  constructor() {
    instance = instance || this.implementation;
    return instance;
  }

  implementation = {
    init: jest.fn(),
    fetchData: jest.fn(() => Promise.resolve([{ id: 0, name: "" }])),
  };
}
