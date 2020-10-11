import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";

describe("Component", () => {
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

  test("something else", async () => {
    render(<Component config={{ reloadEnabled: true }} />);
    const items = await screen.findAllByTestId("item");
    expect(items.length).toBe(1);
  });
});
