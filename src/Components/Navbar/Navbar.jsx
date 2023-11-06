import NavbarStyles from "./Navbar.module.css";
import LogoImgSrc from "../../assets/Logo.png";
import PropTypes from "prop-types";
import bagIconSrc from "../../assets/bagIcon.png";

const NavbarBtn = ({ text, currentPage, setPage }) => {
  return (
    <button
      onClick={() => setPage(text)}
      className={
        NavbarStyles.menuBtn +
        // If the page is the selected page change the style
        (currentPage === text ? " " + NavbarStyles.menuBtnSelected : "")
      }
    >
      {text}
    </button>
  );
};

NavbarBtn.propTypes = {
  text: PropTypes.string.isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setPage: PropTypes.func.isRequired,
};

const BagItemIcon = ({ shoppingCart }) => {
  const items = shoppingCart.reduce((prev, cur) => {
    return cur.amount + prev;
  }, 0);

  return <div className={NavbarStyles.bagIconCon}>{items}</div>;
};

BagItemIcon.propTypes = {
  shoppingCart: PropTypes.array,
};

export const Navbar = ({ currentPage, setPage, shoppingCart }) => {
  return (
    <div className={NavbarStyles.con}>
      <img src={LogoImgSrc} className={NavbarStyles.logo}></img>
      <div className={NavbarStyles.buttonCon}>
        <NavbarBtn text={"HOME"} currentPage={currentPage} setPage={setPage} />
        <NavbarBtn text={"SHOP"} currentPage={currentPage} setPage={setPage} />
        <NavbarBtn text={"MORE"} currentPage={currentPage} setPage={setPage} />
      </div>
      <div className={NavbarStyles.bagCon}>
        <img className={NavbarStyles.bagIcon} src={bagIconSrc} />
        {shoppingCart.length !== 0 ? (
          <BagItemIcon shoppingCart={shoppingCart} />
        ) : null}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setPage: PropTypes.func.isRequired,
  shoppingCart: PropTypes.array,
};
