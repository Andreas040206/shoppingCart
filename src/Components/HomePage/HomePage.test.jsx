import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { HomePage } from "./HomePage.jsx";

// Their is no logic or any interactive parts in the homepage therfor i only test the snapshot
describe("Homepage test", () => {
  it("Renders the content correctly", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
