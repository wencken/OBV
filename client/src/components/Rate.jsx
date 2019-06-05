import React from "react";
import PropTypes from "prop-types";

const Rate = ({ value, max }) => {
  return (
    <span>
      {value} - {Math.round((value / max) * 100)}%
    </span>
  );
};

Rate.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default Rate;
