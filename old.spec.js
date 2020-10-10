import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { observable } from "mobx";
import React from "react";
import "regenerator-runtime/runtime";

// MyStore
const myStore = observable({
  data: [],
  otherData: "",
  provider: "MyFirstProvider",
});

// MyFirstProvider
class MyFirstProvider {
  fetchData() {
    return Promise.resolve([]);
  }
}

// MySecondProvider
class MySecondProvider {
  fetchData() {
    return Promise.resolve([].filter((item) => item.id === myStore.otherData));
  }
}

// ignore me
const providers = {
  MyFirstProvider: MyFirstProvider,
  MySecondProvider: MySecondProvider,
};

// MyManager
class MyManager {
  async init(config) {
    this.provider = await Promise.resolve(new providers[config]());
  }

  fetchData() {
    return this.provider.fetchData();
  }
}

// MyService
const myManager = new MyManager();
let myService;
class MyService {
  constructor() {
    if (myService) return myService;
    myService = this;
  }

  async init() {
    await myManager.init(myStore.provider);
  }

  fetchData() {
    myManager.fetchData().then((data) => {
      myStore.data.concat(data);
    });
  }
}

// App
class App extends React.Component {
  componentDidMount() {
    const myService = new MyService();
    myService.init();
  }
  render() {
    return <div />;
  }
}

// MyComponent
const mService = new MyService();
class MyComponent extends React.Component {
  componentDidMount() {
    mService.fetchData();
  }

  render() {
    return (
      <div>
        {myStore.data.map((item) => (
          <div key={item.id} data-testid="item">
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

describe("me", () => {
  test("something", async () => {
    render(<MyComponent />);
    const results = await screen.findAllByTestId("item");
    expect(results.length).toBe(0);
  });
});
