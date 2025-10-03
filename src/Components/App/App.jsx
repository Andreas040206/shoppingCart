import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ShoppingBag } from "../ShoppingBag/ShoppingBag";
import {
  addToShoppingCart,
  removeFromShoppingCart,
  decreaseItemFromShoppingCart,
} from "../../Logic/ShoppingCartMethoeds/shoppingCartMethoeds";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

  const addToCart = (data) => {
    addToShoppingCart(data, shoppingCart, setShoppingCart);
  };

  const decreaseItemFromCart = (data) => {
    decreaseItemFromShoppingCart(data, shoppingCart, setShoppingCart);
  };

  const removeFromCart = (data) => {
    removeFromShoppingCart(data, shoppingCart, setShoppingCart);
  };

  return (
    <div>
      <Navbar
        setIsShoppingBagOpen={setIsShoppingBagOpen}
        shoppingCart={shoppingCart}
      />
      <Outlet context={{ addToCart }} />

      {isShoppingBagOpen === true ? (
        <ShoppingBag
          shoppingCart={shoppingCart}
          setIsShoppingBagOpen={setIsShoppingBagOpen}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          decreaseItemFromCart={decreaseItemFromCart}
          setShoppingCart={setShoppingCart}
        />
      ) : null}
    </div>
  );
};
