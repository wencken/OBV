import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import Filter from "./Filter";
import styles from "./PageHeader.module.css";

const PageHeader = ({ title }) => {
  return (
    <header>
      <article className={styles.box}>
        <ul className={styles.social}>
          <li className={styles.social_list}>
            <a href="https://www.facebook.com/balletvlaanderen/">
              <svg
                className={styles.social_svg}
                id="facebook"
                viewBox="0 0 32 32"
              >
                <path d="M18,7 L18,12 L24,12 L22.8571429,18 L18,18 L18,32 L12,32 L12,18 L8,18 L8,12 L12,12 L12,7 C12,4.02337177 13.2200292,-1.26728739 24,0.276480327 C24,0.276480327 24,5.13604281 24,5.13604281 C19.1145559,5.01287121 18.1644793,5.53272685 18,7 Z" />
              </svg>
            </a>
          </li>
          <li className={styles.social_list}>
            <a href="https://www.instagram.com/explore/tags/operaballetvlaanderen/?hl=nl">
              <svg
                className={styles.social_svg}
                viewBox="0 0 32 32"
                id="instagram"
              >
                <path d="M28,29 L4,29 C3.448,29 3,28.552 3,28 L3,13 L7,13 C6.479,13.75 6.303,15.149 6.303,16.037 C6.303,21.392 10.67,25.749 16.037,25.749 C21.405,25.749 25.772,21.392 25.772,16.037 C25.772,15.149 25.646,13.771 25,13 L29,13 L29,28 C29,28.552 28.552,29 28,29 M16.037,9.898 C19.436,9.898 22.191,12.647 22.191,16.037 C22.191,19.428 19.436,22.177 16.037,22.177 C12.639,22.177 9.884,19.428 9.884,16.037 C9.884,12.647 12.639,9.898 16.037,9.898 M24,4 L27,4 C27.552,4 28,4.448 28,5 L28,8 C28,8.552 27.552,9 27,9 L24,9 C23.448,9 23,8.552 23,8 L23,5 C23,4.448 23.448,4 24,4 M28.196,0 L3.804,0 C1.703,0 0,1.699 0,3.795 L0,28.205 C0,30.301 1.703,32 3.804,32 L28.196,32 C30.297,32 32,30.301 32,28.205 L32,3.795 C32,1.699 30.297,0 28.196,0" />
              </svg>
            </a>
          </li>
          <li className={styles.social_list}>
            <a href="https://twitter.com/operaballetvl">
              <svg
                className={styles.social_svg}
                viewBox="0 0 32 32"
                id="twitter"
              >
                <path d="M32,6.078 C30.823,6.6 29.557,6.953 28.229,7.112 C29.585,6.299 30.626,5.013 31.116,3.48 C29.848,4.232 28.442,4.778 26.947,5.073 C25.749,3.797 24.043,3 22.155,3 C18.529,3 15.59,5.939 15.59,9.565 C15.59,10.079 15.648,10.58 15.76,11.061 C10.303,10.787 5.466,8.173 2.228,4.201 C1.663,5.171 1.339,6.299 1.339,7.502 C1.339,9.779 2.498,11.789 4.259,12.966 C3.183,12.932 2.171,12.637 1.286,12.145 C1.285,12.173 1.285,12.2 1.285,12.228 C1.285,15.409 3.548,18.062 6.552,18.665 C6.001,18.815 5.421,18.895 4.822,18.895 C4.399,18.895 3.988,18.854 3.587,18.778 C4.422,21.386 6.847,23.284 9.72,23.337 C7.473,25.098 4.642,26.147 1.566,26.147 C1.036,26.147 0.514,26.116 0,26.056 C2.905,27.918 6.356,29.005 10.064,29.005 C22.14,29.005 28.743,19.001 28.743,10.326 C28.743,10.041 28.737,9.758 28.724,9.476 C30.007,8.551 31.12,7.395 32,6.078" />
              </svg>
            </a>
          </li>
        </ul>
        <h1 className={styles.titel}>{title}</h1>
        <Filter />
      </article>
      <Navigation />
    </header>
  );
};

PageHeader.defaultProps = {
  title: `De Derde Boodschap`
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
