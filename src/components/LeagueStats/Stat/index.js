import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import "./Stat.scss";

const Stat = ({ content, index, favorite = false }) => {
  const {
    name,
    total,
    win,
    draw,
    loss,
    goalsfor,
    goalsagainst,
    goalsdifference
  } = content;

  const cssClass = classNames("stat", {
    "stat stat--favorite": favorite
  });

  return (
    <tr className={cssClass}>
      <td>{index + 1}</td>
      <td className="left">{name}</td>
      <td>{win + draw + loss}</td>
      <td>{win}</td>
      <td>{draw}</td>
      <td>{loss}</td>
      <td>{goalsfor}</td>
      <td>{goalsagainst}</td>
      <td>{goalsdifference}</td>
      <td>{total}</td>
    </tr>
  );
};

Stat.propTypes = {
  content: PropTypes.object,
  index: PropTypes.number,
  favorite: PropTypes.bool
}

export default Stat;
