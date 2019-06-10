import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import styles from "./PageHeader.module.css";

const PageHeader = ({ title }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logoTitle}>{title}</h1>
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
