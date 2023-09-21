import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }) => {
  const handleClick = () => {
    setTimeout(() => console.log("Hello world!"), 3000);
  };
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
