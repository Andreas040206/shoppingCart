import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { ThankYouPage } from "./ThankYouPage";

describe("Testing ThankYouPage component", () => {
  it("Loads correctly", () => {
    const { container } = render(<ThankYouPage />);
    expect(container).toMatchSnapshot();
  });
});
