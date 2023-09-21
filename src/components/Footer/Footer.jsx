import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.footer_items}>
          <li className={styles.item}>
            <div className={styles.location}>
              <h4 className={styles.title}>Location</h4>
              <p className={styles.text}>130 Fulton St, New York </p>
              <div className={styles.line} />
              <p className={styles.text}>NY 10038, USA</p>
            </div>
          </li>
          <div className={styles.vertical_line} />
          <li className={styles.item}>
            <div className={styles.hours}>
              <h4 className={styles.title}>Opening hours</h4>
              <p className={styles.text}>Mon - Sat: 11:00 - 23:00</p>
              <p className={styles.text}>Sun: 11:00 - 19:00</p>
              <p className={styles.text}>
                Food in the restaurant and takeaway!
              </p>
            </div>
          </li>
          <div className={styles.vertical_line} />
          <li className={styles.item}>
            <div className={styles.socials}>
              <h4 className={styles.title}>Socials</h4>
              <Link
                to="https://instagram.com"
                target="blank"
                className={styles.link}
              >
                Instagram
              </Link>
              <Link
                to="https://facebook.com"
                target="blank"
                className={styles.link}
              >
                Facebook
              </Link>
              <Link
                to="https://twitter.com"
                target="blank"
                className={styles.link}
              >
                Twitter
              </Link>
            </div>
          </li>
        </ul>
        <p className={styles.copyright}>Copyright ©2021 by Bonbons Chocolate</p>
      </div>
    </div>
  );
};

export default Footer;
