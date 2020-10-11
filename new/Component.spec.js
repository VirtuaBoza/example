import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";
import { DataStore, DataStoreProvider } from "./dataStore";

jest.mock("./Manager");

describe.skip("Component", () => {
  test("something", () => {
    render(
      <DataStoreProvider store={new DataStore()}>
        <Component config={{ reloadEnabled: true }} />
      </DataStoreProvider>
    );
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0");
    fireEvent.click(screen.getByText("Increment"));
    expect(count.innerHTML).toBe("1");
  });

  test("the same thing", () => {
    render(
      <DataStoreProvider store={new DataStore()}>
        <Component config={{ reloadEnabled: true }} />
      </DataStoreProvider>
    );
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0");
    fireEvent.click(screen.getByText("Increment"));
    expect(count.innerHTML).toBe("1");
  });

  test("something else", async () => {
    render(
      <DataStoreProvider store={new DataStore()}>
        <Component config={{ reloadEnabled: true }} />
      </DataStoreProvider>
    );
    const items = await screen.findAllByTestId("item");
    expect(items.length).toBe(1);
  });
});
