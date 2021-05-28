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

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState({});

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

  return (
    <div>
      <CountriesContext.Provider value={{ countries, regions }}>
        {children}
      </CountriesContext.Provider>
    </div>
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
