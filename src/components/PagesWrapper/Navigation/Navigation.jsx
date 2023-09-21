import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to=".">Home</Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">About Us</Link>
        </li>
        <li>
          <Link className={styles.link} to="/menu">Menu</Link>
        </li>
        <li>
          <a className={styles.link} href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
