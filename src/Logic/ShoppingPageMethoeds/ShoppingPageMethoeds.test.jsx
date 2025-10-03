// From libraryes
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Other imports
import { isItemSearched } from "./ShoppingPageMethoeds";

describe("Testing isItemSearched", () => {
  it("Returns false when item doesnt match", () => {
    expect(
      isItemSearched("men jaket", "Mens Casual Premium Slim Fit T-Shirts")
    ).toEqual(false);
  });
  it("Returns true if word match", () => {
    expect(isItemSearched("Hat", "New Hatting from elo")).toEqual(true);
  });
  it("Doesn't fail if search is an empty string", () => {
    expect(isItemSearched("", "New Hatting from elo")).toEqual(true);
  });
});
