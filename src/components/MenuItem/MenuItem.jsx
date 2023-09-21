import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.img} alt={item.name} className={styles.image} />
      <div className={styles.text_content}>
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.desc}>{item.desc}</p>
        <h3 className={styles.price}>Price: {item.price}$</h3>
      </div>
    </div>
  );
};

export default MenuItem;
