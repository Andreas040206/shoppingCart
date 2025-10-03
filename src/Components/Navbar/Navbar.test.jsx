// From libraryes
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Other imports
import { Navbar } from "./Navbar.jsx";
import NavbarStyles from "./Navbar.module.css";

describe("Navbar tests", () => {
  it("Renders the navbar component", () => {
    const { container } = render(<Navbar shoppingCart={[]} />);
    expect(container).toMatchSnapshot();
  });
  it("Change the 'page' value by running set pageFn on click", async () => {
    const user = userEvent.setup();

    let currentPage = "HOME";

    const setFn = (value) => {
      currentPage = value;
    };

    render(
      <Navbar currentPage={currentPage} setPage={setFn} shoppingCart={[]} />
    );
    const shopBtn = screen.getByRole("button", { name: "SHOP" });

    await user.click(shopBtn);

    expect(currentPage).toBe("SHOP");
  });
  it("Gives navbar btns the right clases", () => {
    render(
      <Navbar currentPage={"SHOP"} setPage={() => {}} shoppingCart={[]} />
    );

    const shopBtn = screen.getByRole("button", { name: "SHOP" });
    const homeBtn = screen.getByRole("button", { name: "HOME" });

    expect(homeBtn).not.toHaveClass(NavbarStyles.menuBtnSelected);
    expect(shopBtn).toHaveClass(NavbarStyles.menuBtnSelected);
  });
});
