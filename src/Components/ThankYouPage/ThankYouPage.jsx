import ThankYouPageStyles from "./ThankYouPage.module.css";
import { Button } from "../Button/Button.jsx";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ThankYouPage = ({ setIsThankPage, setIsClosingShoppingBag }) => {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={
        ThankYouPageStyles.bgCon +
        // Making sure the animation is executed
        " " +
        (isClosing === true ? ThankYouPageStyles.bgConClosing : null)
      }
    >
      <div
        className={
          ThankYouPageStyles.con +
          // Making sure the animation is executed
          " " +
          (isClosing === true ? ThankYouPageStyles.conClosing : null)
        }
      >
        <h1 className={ThankYouPageStyles.header}>Thank you!</h1>
        <span className={ThankYouPageStyles.text}>
          Thanks for testing my webside
        </span>
        <Button
          text={"Try again!"}
          fn={() => {
            setIsClosing(true);
            setIsClosingShoppingBag(true);
            setTimeout(() => {
              // It shouldn't remove the element before the animation
              setIsThankPage(false);
              navigate("/", { replace: true });
            }, 1300);
          }}
        />
      </div>
    </div>
  );
};

ThankYouPage.propTypes = {
  setIsThankPage: PropTypes.func.isRequired,
};
