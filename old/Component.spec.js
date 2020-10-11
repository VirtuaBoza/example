import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";
import dataStore from "./dataStore";

jest.mock("./Service");

// Actually using the store mock here would make the tests fail
// since the mock is not an observable, it's state changes would not
// cause a re-render.
// jest.mock("./dataStore");

// Meanwhile, who knows what the state of the configStore (or other stores) is at any point?

describe("Component", () => {
  beforeEach(() => {
    // Failing to reset this state before each test would make
    // one of the tests fail.
    dataStore.counter = 0;
    dataStore.data = [];
  });

  test("something", () => {
    render(<Component config={{ reloadEnabled: true }} />);
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0");
    fireEvent.click(screen.getByText("Increment"));
    expect(count.innerHTML).toBe("1");
  });

  test("the same thing", () => {
    render(<Component config={{ reloadEnabled: true }} />);
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0");
    fireEvent.click(screen.getByText("Increment"));
    expect(count.innerHTML).toBe("1");
  });

  test("renders items", async () => {
    dataStore.data = [{ id: 0, name: "" }];
    render(<Component config={{ reloadEnabled: true }} />);
    const items = await screen.findAllByTestId("item");
    expect(items.length).toBe(1);
  });
});
