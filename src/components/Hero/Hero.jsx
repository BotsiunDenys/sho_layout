import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero_title}>Feel in Italy with our restaurant</h1>
      <h4 className={styles.hero_subTitle}>You can feel happy with us</h4>
    </div>
  );
};

export default Hero;
