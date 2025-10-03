import { Link } from "react-router-dom";
import produktCardStyles from "./ProduktCardEl.module.css";
import PropTypes from "prop-types";
import { makeSlug } from "../../Logic/ShoppingPageMethoeds/ShoppingPageMethoeds";

export const ProduktCard = ({ data }) => {
  return (
    <Link
      to={`/products/${makeSlug(data.title, data.id)}`}
      className={produktCardStyles.con}
    >
      <div className={produktCardStyles.imgCon}>
        <img className={produktCardStyles.img} src={data.image} />
      </div>
      <div className={produktCardStyles.infoCon}>
        <p className={produktCardStyles.title}>{data.title}</p>
        <p className={produktCardStyles.description}>{data.description}</p>
        <div className={produktCardStyles.priceCon}>
          <span className={produktCardStyles.priceText}>{data.price} €</span>
        </div>
      </div>
    </Link>
  );
};

ProduktCard.propTypes = {
  data: PropTypes.object.isRequired,
};
