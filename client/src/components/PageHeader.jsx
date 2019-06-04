import React from "react";
import PropTypes from "prop-types";
// import styles from "./PageHeader.module.css";

const PageHeader = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

PageHeader.defaultProps = {
  title: `De Derde Boodschap`
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
