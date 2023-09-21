import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Selve Restourant</header>
    </div>
  );
};

export default Header;
