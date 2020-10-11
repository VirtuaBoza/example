import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Component";
import RootProvider from "./RootProvider";

describe("Component", () => {
  test("service is defined", async () => {
    render(
      <RootProvider>
        <Component config={{ reloadEnabled: true }} />
      </RootProvider>
    );
    await screen.findByText("service is defined");
  });
  // test("something", async () => {
  //   render(
  //     <RootProvider>
  //       <Component config={{ reloadEnabled: true }} />
  //     </RootProvider>
  //   );
  //   const count = await screen.findByTestId("count");
  //   expect(count.innerHTML).toBe("0");
  //   fireEvent.click(screen.getByText("Increment"));
  //   expect(count.innerHTML).toBe("1");
  // });

  // test("the same thing", () => {
  //   render(
  //     <RootProvider>
  //       <Component config={{ reloadEnabled: true }} />
  //     </RootProvider>
  //   );
  //   const count = screen.getByTestId("count");
  //   expect(count.innerHTML).toBe("0");
  //   fireEvent.click(screen.getByText("Increment"));
  //   expect(count.innerHTML).toBe("1");
  // });

  // test("something else", async () => {
  //   render(
  //     <RootProvider>
  //       <Component config={{ reloadEnabled: true }} />
  //     </RootProvider>
  //   );
  //   const items = await screen.findAllByTestId("item");
  //   expect(items.length).toBe(1);
  // });
});
