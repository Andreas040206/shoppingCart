import MorePageStyles from "./MorePage.module.css";
import RocketImgSrc from "../../assets/rocket.gif";

export const MorePage = () => {
  return (
    <div className={MorePageStyles.con}>
      <img className={MorePageStyles.img} src={RocketImgSrc} />
      <span className={MorePageStyles.text}>Sorry, nothing here...</span>
    </div>
  );
};
