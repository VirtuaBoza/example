import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import "regenerator-runtime/runtime";
import Component from "./Component";

describe("Component", () => {
  test("something", async () => {
    render(<Component config={{ reloadEnabled: true }} />);
  });
});
