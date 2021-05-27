import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await resp.json();
    console.log({ data });
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log({ data });
  return (
    <div>
      <CountriesContext.Provider value={countries}>
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

// export { CountriesProvider };
export default CountriesContext;
