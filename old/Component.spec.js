import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";
import dataStore from "./dataStore";

jest.mock("./Service");

// Actually using the store mock here would make the tests fail
// since the mock is not an observable, it's state changes would not
// cause a re-render.
// jest.mock("./dataStore");

describe("Component", () => {
  beforeEach(() => {
    // Failing to reset this state before each test would make
    // one of the tests fail.
    dataStore.counter = 0;
  });

  test("something", async () => {
    render(<Component config={{ reloadEnabled: true }} />);
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0");
    fireEvent.click(screen.getByText("Increment", { exact: false }));
    expect(count.innerHTML).toBe("1");
  });

  test("the same thing", async () => {
    render(<Component config={{ reloadEnabled: true }} />);
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0");
    fireEvent.click(screen.getByText("Increment", { exact: false }));
    expect(count.innerHTML).toBe("1");
  });
});
