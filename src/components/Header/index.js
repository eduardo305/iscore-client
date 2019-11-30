import React from "react";
import PropTypes from 'prop-types';
import Button from "../Button";

import "./Header.scss";

const Header = ({
  changeCountry,
  changeLeague
}) => {
  return (
    <div className="header">
      <Button label="Change country" onClick={changeCountry} />
      <Button label="Change League" onClick={changeLeague} />
    </div>
  );
};

Header.propTypes = {
  changeCountry: PropTypes.func,
  changeLeague: PropTypes.func
}

export default Header;
