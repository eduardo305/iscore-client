import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import "./Button.scss";

const Button = ({ onClick, label, round }) => {
  const cssClass = classNames("button", {
    "button--round": round
  });

  return (
    <button className={cssClass} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: () => {},
  label: PropTypes.string,
  round: PropTypes.bool
}

export default Button;
