import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Selector from "../Selector";
import { getLeaguesByCountry } from "../../api/leagues";

const LeagueSelector = ({ country = "Brazil", onChange, onClick }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getLeaguesByCountry(country).then(response => {
      setOptions(response);
      onChange && onChange(response[0]);
    });
  }, []);

  return <Selector options={options} onChange={onChange} onClick={onClick} />;
};

LeagueSelector.propTypes = {
  country: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default LeagueSelector;
