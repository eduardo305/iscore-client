import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Stat from "./Stat";
import SoccerLoader from '../SoccerLoader';

import { getStatsByLeague } from "../../api/leagues";

import "./LeagueStats.scss";

const LeagueStats = ({ league, favorite }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getStatsByLeague(league).then(response => {
      setStats(response);
    });
  }, []);

  const renderStats = () => {
    return stats.map((stat, i) => {
      return (
        <Stat
          content={stat}
          key={stat.teamid}
          index={i}
          favorite={favorite === stat.name.toLowerCase()}
        />
      );
    });
  };

  if (!stats.length) {
    return <SoccerLoader />
  }

  return (
    <div className="league-stats">
      {stats.length > 0 && (
        <table className="league-stats__list">
          <thead>
            <tr>
              <th>Position</th>
              <th className="left">Club</th>
              <th>M</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>{renderStats()}</tbody>
        </table>
      )}
    </div>
  );
};

LeagueStats.propTypes = {
  league: PropTypes.string,
  favorite: PropTypes.string
}

export default LeagueStats;
