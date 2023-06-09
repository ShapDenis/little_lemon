import styles from "./FirstSection.module.css";
import foodImage from "../../../../assets/restauranfood.png";
import Button from "../../../../components/Button/Button";
import navigationLinks from "../../../../utils/navigationLinks";

const FirstSection = () => {
  const { url } = navigationLinks[1];

  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.hero_details}`}>
        <div>
          <h1>Little Lemon</h1>
          <h2>Istambul</h2>
        </div>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist{" "}
        </p>
        <div className={styles.button}>
          <Button text={"Reserve a Table"} role={"link"} url={url} />
        </div>
      </div>
      <div className="">
        <img src={foodImage} alt="restaurant food" />
      </div>
    </div>
  );
};

export default FirstSection;
