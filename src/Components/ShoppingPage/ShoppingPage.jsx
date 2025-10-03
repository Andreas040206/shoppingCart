import GetProducts from "../../hooks/fakeStoreAPI.jsx";
import shoppingStyles from "./ShoppingPage.module.css";
import { ProduktCard } from "../ProduktCardEl/ProduktCardEl";
import loadingGifSrc from "../../assets/YlWC.gif";
import PropTypes from "prop-types";
import { useState } from "react";
import { isItemSearched } from "../../Logic/ShoppingPageMethoeds/ShoppingPageMethoeds";

// Img
import searchIconSrc from "../../assets/searchIcon.svg";

const ShoppingPage = () => {
  const [search, setSearch] = useState("");

  const { productsData, error } = GetProducts();

  // If it's stil fetching the data
  if (error) {
    return <div>We have encounterd a network error</div>;
  }
  if (!productsData) {
    return (
      <div className={shoppingStyles.loadCon}>
        <img className={shoppingStyles.loadingGif} src={loadingGifSrc} />
      </div>
    );
  }

  const produktCard = productsData.map((produktData) => {
    if (isItemSearched(search, produktData.title) === true) {
      return <ProduktCard key={produktData.id} data={produktData} />;
    } else {
      return null;
    }
  });

  return (
    <div className={shoppingStyles.pageCon}>
      <div className={shoppingStyles.searchbarCon}>
        <input
          type="text"
          onInput={(e) => {
            setSearch(e.target.value);
          }}
          className={shoppingStyles.searchbarInput}
        />
        <img className={shoppingStyles.searchIcon} src={searchIconSrc} />
      </div>
      <div className={shoppingStyles.productsCon}>{produktCard}</div>
    </div>
  );
};

ShoppingPage.propTypes = {};

export default ShoppingPage;
