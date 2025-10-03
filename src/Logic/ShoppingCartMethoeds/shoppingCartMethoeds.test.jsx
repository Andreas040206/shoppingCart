import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  addToShoppingCart,
  removeFromShoppingCart,
  decreaseItemFromShoppingCart,
} from "./shoppingCartMethoeds";

describe("Testing removeFromShoppingCart", () => {
  it("Can remove an item entirely, even when multiple items are in the bag", () => {
    let state = [
      { info: { id: 23 }, amount: 6 },
      { info: { id: 21 }, amount: 4 },
      { info: { id: 2 }, amount: 2 },
    ];

    const setState = (value) => {
      state = value;
    };

    const data = { id: 23 };

    removeFromShoppingCart(data, state, setState);

    expect(state).toEqual([
      { info: { id: 21 }, amount: 4 },
      { info: { id: 2 }, amount: 2 },
    ]);
  });
});

describe("Testing decreaseItemFromShoppingCart", () => {
  it("Can remove an item and change the amount only", () => {
    let state = [
      { info: { id: 23 }, amount: 6 },
      { info: { id: 21 }, amount: 4 },
      { info: { id: 2 }, amount: 2 },
    ];

    const setState = (value) => {
      state = value;
    };

    const data = { info: { id: 23 }, amount: 6 };

    decreaseItemFromShoppingCart(data.info, state, setState);

    expect(state).toEqual([
      { info: { id: 23 }, amount: 5 },
      { info: { id: 21 }, amount: 4 },
      { info: { id: 2 }, amount: 2 },
    ]);
  });
  it("If amount is 0 remove it from the cart entirely", () => {
    let state = [
      { info: { id: 21 }, amount: 4 },
      { info: { id: 23 }, amount: 1 },
      { info: { id: 2 }, amount: 2 },
    ];

    const setState = (value) => {
      state = value;
    };

    const data = { info: { id: 23 }, amount: 1 };

    decreaseItemFromShoppingCart(data.info, state, setState);

    expect(state).toEqual([
      { info: { id: 21 }, amount: 4 },
      { info: { id: 2 }, amount: 2 },
    ]);
  });
});

describe("Testing addToShopingCart", () => {
  it("Add an item to the object", () => {
    let state = [];
    const setState = (value) => {
      state = value;
    };

    const data = {};

    addToShoppingCart(data, state, setState);

    expect(state).toEqual([{ info: {}, amount: 1 }]);
  });
  it("Doesn't add two item, but increase the amount", () => {
    let state = [{ info: { id: 1 }, amount: 2 }];

    const setState = (value) => {
      state = value;
    };

    const data = { id: 1 };

    addToShoppingCart(data, state, setState);

    expect(state).toEqual([{ info: { id: 1 }, amount: 3 }]);
  });
});
