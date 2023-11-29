import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

describe("App", () => {
  it("Renders main element", () => {
    render(<App />).container;
    // console.log(container);
    const mainElement = screen.getByRole("main");
    // console.log(mainElement);
    expect(mainElement).toBeInTheDocument();

    // check if App components renders headline
  });
});
