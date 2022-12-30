import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import generateStats from '../helpers/statsData';
import generateStatistics from '../helpers/generate-stats';

const CountriesContext = createContext();

const getRegions = (list) => {
  const regions = {};
  list.forEach((item) => {
    if (regions[item.region]) {
      if (!regions[item.region].includes(item.subregion)) {
        regions[item.region].push(item.subregion);
      }
    } else if (item.region !== '') {
      regions[item.region] = [];
    }
  });
  return regions;
};

const initialMutations = {
  region: 'World',
  subregion: 'All',
  language: 'None',
  orderBy: 'None',
  orderSense: 'up-to-down',
};

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState({});
  const [mutations, setMutations] = useState(initialMutations);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const resp = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await resp.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (countries.length === 250) {
      const regs = getRegions(countries);
      setRegions(regs);
    }
  }, [countries]);

  useEffect(() => {
    if (JSON.stringify(regions) !== '{}') {
      const surface = generateStatistics(countries, regions, 'area');
      const population = generateStatistics(countries, regions, 'population');
      setStats({ surface, population });
    }
  }, [regions]);

  const resetMutations = () => {
    setMutations(initialMutations);
  };

  return (
    <>
      <CountriesContext.Provider
        value={{
          countries,
          regions,
          mutations,
          setMutations,
          resetMutations,
          search,
          setSearch,
          stats,
        }}
      >
        {children}
      </CountriesContext.Provider>
    </>
  );
};

CountriesProvider.propTypes = {
  children: PropTypes.element,
};

CountriesProvider.defaultProps = {
  children: null,
};

export { CountriesProvider };
export default CountriesContext;
