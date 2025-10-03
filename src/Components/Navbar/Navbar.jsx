import NavbarStyles from "./Navbar.module.css";
import LogoImgSrc from "../../assets/Logo.png";
import PropTypes from "prop-types";
import bagIconSrc from "../../assets/bagIcon.png";
import { Link } from "react-router-dom";

const BagItemIcon = ({ shoppingCart }) => {
  const items = shoppingCart.reduce((prev, cur) => {
    return cur.amount + prev;
  }, 0);

  return <div className={NavbarStyles.bagIconCon}>{items}</div>;
};

BagItemIcon.propTypes = {
  shoppingCart: PropTypes.array,
};

export const Navbar = ({ shoppingCart, setIsShoppingBagOpen }) => {
  return (
    <div className={NavbarStyles.con}>
      <img src={LogoImgSrc} className={NavbarStyles.logo}></img>
      <div className={NavbarStyles.buttonCon}>
        <Link to="/" className={NavbarStyles.menuBtn}>
          HOME
        </Link>
        <Link to="/products" className={NavbarStyles.menuBtn}>
          SHOP
        </Link>
        <Link to="/more" className={NavbarStyles.menuBtn}>
          MORE
        </Link>
      </div>
      <div
        onClick={() => {
          setIsShoppingBagOpen(true);
        }}
        className={NavbarStyles.bagCon}
      >
        <img className={NavbarStyles.bagIcon} src={bagIconSrc} />
        {shoppingCart.length !== 0 ? (
          <BagItemIcon shoppingCart={shoppingCart} />
        ) : null}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  shoppingCart: PropTypes.array,
  setIsShoppingBagOpen: PropTypes.func,
};
