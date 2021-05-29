import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

const initialState = {
  region: 'World',
  subregion: 'All',
  language: 'None',
  orderBy: 'None',
  orderSense: 'up-to-down',
};

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState({});
  const [mutations, setMutations] = useState(initialState);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const resp = await fetch(`https://restcountries.eu/rest/v2/all`);
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

  const resetMutations = () => {
    setMutations(initialState);
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
