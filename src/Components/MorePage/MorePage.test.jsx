import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MorePage } from "./MorePage";

describe("Testing the MorePage", () => {
  it("Loads things correctly", () => {
    const { container } = render(<MorePage />);
    expect(container).toMatchSnapshot();
  });
});
