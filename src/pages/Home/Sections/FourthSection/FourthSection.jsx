import styles from "./FourthSection.module.css";
import grids from "../../../../utils/cssGridClassNames";

const FourthSection = () => {
  return (
    <div className={`${styles.about} ${grids}`}>
      <div className={`${styles.details}`}>
        <div className={`${styles.titles}`}>
          <h2>Little Lemon</h2>
          <h3>Istambul</h3>
        </div>
        <p className={`${styles.description}`}>
          Clients are our main value

          At Little Lemon, cozy and stylish, we pay special attention to taking care of our customers. Our mission is to
          make your every visit memorable and enjoyable by providing exceptional service and a personal touch.

          Come to Little Lemon and enjoy the high level of service, delicious cuisine and warm atmosphere. We are glad
          to see you among our dear guests!
        </p>
      </div>
      <div className={`${styles.images}`}>
        <div>
          <img
            src={require(`../../../../assets/Mens-A.jpg`)}
            alt=""
          />
          <img
            src={require(`../../../../assets/Mens-B.jpg`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
