// This is what our service mocks look like
let instance;
export default class MockService {
  constructor() {
    instance = instance || this.implementation;
    return instance;
  }

  implementation = {
    fetchData: jest.fn(),
  };
}
