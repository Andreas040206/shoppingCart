import buttonStyles from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ text, isLight, fn }) => {
  return (
    <button
      className={
        buttonStyles.btn +
        " " +
        (isLight ? buttonStyles.light : buttonStyles.dark)
      }
      onClick={() => {
        fn();
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  isLight: PropTypes.bool,
  fn: PropTypes.func,
};
