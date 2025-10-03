import { useState } from "react";
import ShoppingBagStyles from "./ShoppingBag.module.css";
import { Button } from "../Button/Button";
import { ThankYouPage } from "../ThankYouPage/ThankYouPage.jsx";
import PropTypes from "prop-types";

const BagItem = ({ data, addToCart, removeFromCart, decreaseItemFromCart }) => {
  return (
    <div className={ShoppingBagStyles.itemElCon}>
      <img className={ShoppingBagStyles.iconImg} src={data.info.image} />
      <div className={ShoppingBagStyles.itemTextCon}>
        <span className={ShoppingBagStyles.itemText}>{data.info.title}</span>
        <div className={ShoppingBagStyles.amountCon}>
          <button
            onClick={() => {
              addToCart(data.info);
            }}
            className={ShoppingBagStyles.amountBtn}
          >
            +
          </button>
          <span className={ShoppingBagStyles.amountText}>{data.amount}</span>
          <button
            onClick={() => {
              decreaseItemFromCart(data.info);
            }}
            className={ShoppingBagStyles.amountBtn}
          >
            -
          </button>
        </div>
        <button
          onClick={() => {
            removeFromCart(data.info);
          }}
          className={ShoppingBagStyles.deleteBtn}
        >
          X
        </button>
      </div>
    </div>
  );
};

BagItem.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  decreaseItemFromCart: PropTypes.func.isRequired,
};

export const ShoppingBag = ({
  setIsShoppingBagOpen,
  shoppingCart,
  addToCart,
  removeFromCart,
  decreaseItemFromCart,
  setShoppingCart,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isThankPage, setIsThankPage] = useState(false);

  // To make sure the close tap can be double cliked
  if (isClosing === true) {
    setTimeout(() => {
      setIsShoppingBagOpen(false);
    }, 2500);
  }

  const totalPrice = shoppingCart.reduce(
    (sum, curObj) => sum + curObj.info.price * curObj.amount,
    0
  );

  const bagItems = shoppingCart.map((itemData) => {
    return (
      <BagItem
        data={itemData}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        decreaseItemFromCart={decreaseItemFromCart}
        key={itemData.info.id}
      />
    );
  });

  return (
    <div
      className={
        ShoppingBagStyles.con +
        " " +
        (isClosing === true ? ShoppingBagStyles.conClosing : null)
      }
    >
      <button
        onClick={() => {
          setIsClosing(true);
        }}
        className={ShoppingBagStyles.backArrow}
      >
        {">"}
      </button>
      <div className={ShoppingBagStyles.itemCon}>
        {shoppingCart.length === 0 ? (
          <div className={ShoppingBagStyles.noItemsCon}>
            <span className={ShoppingBagStyles.noItems}>
              Sorry, your cart is empty...
            </span>
          </div>
        ) : (
          bagItems
        )}
      </div>
      <div className={ShoppingBagStyles.checkOutCon}>
        <div className={ShoppingBagStyles.totalCon}>
          <span className={ShoppingBagStyles.totalText}>Total</span>
          <span className={ShoppingBagStyles.totalText}>{totalPrice}€</span>
        </div>
        <div className={ShoppingBagStyles.checkOutBtnCon}>
          <Button
            text={"Go to checkout"}
            isLight={true}
            fn={() => {
              setIsThankPage(true);
              setShoppingCart([]);
            }}
          />
        </div>
      </div>
      {isThankPage === true ? (
        <ThankYouPage
          setIsThankPage={setIsThankPage}
          setIsClosingShoppingBag={setIsClosing}
        />
      ) : null}
    </div>
  );
};

ShoppingBag.propTypes = {
  setIsShoppingBagOpen: PropTypes.func.isRequired,
  shoppingCart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  decreaseItemFromCart: PropTypes.func.isRequired,
  setShoppingCart: PropTypes.func.isRequired,
};
