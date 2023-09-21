import React from "react";
import styles from "./About.module.scss";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <article className={styles.article}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.text_content}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. This is a
            great space to write long text about your company and your services.
          </p>
          <p className={styles.text_content}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. This is a
            great space to write long text about your company and your services.
          </p>
          <Button>More</Button>
        </article>
        <div className={styles.image} />
      </div>
    </section>
  );
};

export default About;
