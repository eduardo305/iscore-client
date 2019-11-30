const getSeasonsByLeague = async league => {
  return fetch(
    `https://www.thesportsdb.com/api/v1/json/1/search_all_seasons.php?id=${league}`
  )
    .then(response => response.json())
    .then(response => response.seasons)
    .catch(err => {
      console.log(err);
    });
};

const getStatsByLeague = async league => {
  const seasons = await getSeasonsByLeague(league);
  const lastSeason = seasons[seasons.length - 1].strSeason;

  return fetch(
    `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${league}&s=${lastSeason}`
  )
    .then(response => response.json())
    .then(response => {
      return response.table.map(stat => {
        return stat;
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getLeaguesByCountry = async country => {
  return fetch(
    `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${country}&s=Soccer`
  )
    .then(response => response.json())
    .then(response => {
      return response.countrys.map(country => {
        const { idLeague, strBadge, strLeague, strCountry } = country;
        return {
          idLeague,
          badge: strBadge,
          label: strLeague,
          country: strCountry,
        };
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export { getLeaguesByCountry, getSeasonsByLeague, getStatsByLeague };
