import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Selector from '../Selector';
import { AppContext } from '../../providers/AppProvider';
import { getLeaguesByCountry } from '../../api/leagues';

const LeagueSelector = ({ country = 'Brazil', onChange, onClick }) => {
  const [options, setOptions] = useState([]);
  const { error, setError } = useContext(AppContext);

  useEffect(() => {
    getLeaguesByCountry(country)
      .then(response => {
        setOptions(response);
        onChange && onChange(response[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>an error has occurred...</div>;
  }

  return <Selector options={options} onChange={onChange} onClick={onClick} />;
};

LeagueSelector.propTypes = {
  country: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default LeagueSelector;
