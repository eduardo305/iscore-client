import React from "react";
import PropTypes from 'prop-types';

import "./Caption.scss";

const Caption = ({ caption }) => {
  return (
    <div className="caption">
      <span>{caption}</span>
    </div>
  );
};

Caption.propTypes = {
  caption: PropTypes.string
}

export default Caption;
