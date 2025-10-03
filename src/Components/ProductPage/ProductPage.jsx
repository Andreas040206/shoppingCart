import PropTypes from "prop-types";
import ProductPageStyles from "./ProductPage.module.css";
import { Button } from "../Button/Button.jsx";
import { useOutletContext, useParams } from "react-router-dom";
import GetProducts from "../../hooks/fakeStoreAPI.jsx";
import { makeSlug } from "../../Logic/ShoppingPageMethoeds/ShoppingPageMethoeds.jsx";
import shoppingStyles from "../ShoppingPage/ShoppingPage.module.css";
import loadingGifSrc from "../../assets/YlWC.gif";

export const ProductPage = () => {
  const slug = useParams();
  const { addToCart } = useOutletContext();

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

  const data = productsData.find((e) => makeSlug(e.title, e.id) == slug.name);

  return (
    <div className={ProductPageStyles.pageCon}>
      <div className={ProductPageStyles.imgCon}>
        <img className={ProductPageStyles.img} src={data.image} />
      </div>
      <div className={ProductPageStyles.textCon}>
        <div className={ProductPageStyles.textInnerCon}>
          <span className={ProductPageStyles.header}>{data.title}</span>
          <span className={ProductPageStyles.text}>{data.description}</span>
          <div className={ProductPageStyles.btnCon}>
            <Button
              text={"Add to cart"}
              fn={() => {
                addToCart(data);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {};
