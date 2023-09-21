import React from "react";
import { menuData } from "./data";
import styles from "./Menu.module.scss";
import MenuItem from "../../components/MenuItem/MenuItem";
import Button from "../../components/Button/Button";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>Menu</h3>
        <div className={styles.items}>
          {menuData.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.button_container}>
          <Button>More</Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
