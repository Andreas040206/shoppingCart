import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Vitest } from "vitest";

import GetProducts from "../../hooks/fakeStoreAPI.jsx";
import ShoppingPage from "./ShoppingPage.jsx";

describe("Testing the GetProducts fn", () => {
  it("Throws an error if the API returns with a code 400", async () => {
    await vi.mock("../../hooks/fakeStoreAPI.jsx", async () => {
      () => {
        ok: false;
      };
    });

    render(<ShoppingPage />);

    expect().toBeTruthy();
  });
});
