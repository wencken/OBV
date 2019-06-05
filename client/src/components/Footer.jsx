import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.box}>
      <div className={styles.box1}>
        <h1>De Derde Boodschap</h1>
        <p>&#169;2019</p>
      </div>
      <div className={styles.box2}>
        <p>Damien Dijksman</p>
        <p>Margot Verbeke</p>
        <p>Thomas Habets</p>
        <p>Wencke Nuyt</p>
      </div>
    </footer>
  );
};

export default Footer;
