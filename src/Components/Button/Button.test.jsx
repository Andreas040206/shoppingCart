// From libraryes
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";
import ButtonStyles from "./Button.module.css";

describe("Button tests", () => {
  it("Fn is run when button is clicked", async () => {
    const user = userEvent.setup();

    let isFnRun = false;

    const testFn = () => {
      isFnRun = true;
    };

    render(<Button text={"Button"} fn={testFn} />);
    const Btn = screen.getByRole("button", { name: "Button" });

    await user.click(Btn);

    expect(isFnRun).toBe(true);
  });

  it("Assigns the right classes when given isLight set to true", () => {
    render(<Button text={"Button"} isLight={true} />);
    const Btn = screen.getByRole("button", { name: "Button" });

    expect(Btn).toHaveClass(ButtonStyles.light);
  });
});
