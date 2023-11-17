import homePageStyles from "./HomePage.module.css";

import frontImgSrc from "../../assets/frontClothingImg.jpg";
import logoPngSrc from "../../assets/Logo-removebg.png";

export const HomePage = () => {
  return (
    <div className={homePageStyles.page}>
      <div className={homePageStyles.imgCon}>
        <img className={homePageStyles.logo} src={logoPngSrc} />
        <img className={homePageStyles.coverImg} src={frontImgSrc} />
      </div>
      <div className={homePageStyles.textCon}>
        <span className={homePageStyles.header}>Fashion since 1923</span>
        <span className={homePageStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rutrum scelerisque rutrum. Donec auctor magna sit amet consequat
          pretium. Ut mollis sollicitudin ex eget consectetur. Duis luctus
          elementum ex, condimentum aliquam nisl ultrices vel. Nullam vel
          suscipit justo. Ut vel dignissim risus. Nam tristique laoreet massa
          auctor lacinia. Sed sit amet porttitor est. Suspendisse rhoncus velit
          id mattis malesuada.
        </span>
      </div>
    </div>
  );
};
