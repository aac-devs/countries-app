import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  Avatar,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
  InputBase,
} from '@material-ui/core';
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import useStyles from './mainStyles';
import CountriesContext from '../contexts/CountriesContext';
import mutatingCountryList, {
  languages,
  searchCountryCapital,
} from '../helpers/mutatingData';

const MainPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    countries,
    regions,
    mutations,
    setMutations,
    resetMutations,
    search,
    setSearch,
  } = useContext(CountriesContext);
  const [countriesList, setCountriesList] = useState(countries);
  const [searchStimulus, setSearchStimulus] = useState(false);

  const handleSelectCountry = (option) => {
    history.push(`/countries/details/:${option}`);
  };

  useEffect(() => {
    setCountriesList(countries);
  }, [countries]);

  useEffect(() => {
    setCountriesList(mutatingCountryList(countries, mutations));
    setSearchStimulus(false);
  }, [mutations]);

  useEffect(() => {
    if (search.length >= 3) {
      setCountriesList(searchCountryCapital(countries, search.toLowerCase()));
    }
    if (search.length === 0 && searchStimulus) {
      setCountriesList(countries);
    }
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchStimulus(true);
  };

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Countries list [{countriesList.length}]
          </Typography>
          <div className={classes.head}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={mutations.region}
                onChange={(e) =>
                  setMutations({
                    ...mutations,
                    region: e.target.value,
                    subregion: 'All',
                  })
                }
                onClick={() => setSearch('')}
                label="Select Region"
              >
                <MenuItem value="World">World</MenuItem>
                {regions &&
                  Object.keys(regions).map((reg) => (
                    <MenuItem value={reg} key={reg}>
                      {reg}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Sub-region
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={mutations.subregion}
                onChange={(e) =>
                  setMutations({
                    ...mutations,
                    subregion: e.target.value,
                  })
                }
                onClick={() => setSearch('')}
                label="Select Sub-region"
              >
                <MenuItem value="All">All</MenuItem>
                {regions[mutations.region] &&
                  regions[mutations.region].map((sub) => (
                    <MenuItem value={sub} key={sub}>
                      {sub}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={mutations.language}
                onChange={(e) =>
                  setMutations({
                    ...mutations,
                    language: e.target.value,
                  })
                }
                onClick={() => setSearch('')}
                label="Select Language"
              >
                <MenuItem value="None">None</MenuItem>
                {languages.map((lang) => (
                  <MenuItem value={lang.code} key={lang.code}>
                    {lang.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Order by
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={mutations.orderBy}
                onChange={(e) =>
                  setMutations({
                    ...mutations,
                    orderBy: e.target.value,
                  })
                }
                onClick={() => setSearch('')}
                label="Order by"
              >
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Name">Name</MenuItem>
                <MenuItem value="Area">Area</MenuItem>
                <MenuItem value="Population">Population</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              onClick={() =>
                setMutations({
                  ...mutations,
                  orderSense:
                    mutations.orderSense === 'up-to-down'
                      ? 'down-to-up'
                      : 'up-to-down',
                })
              }
            >
              {mutations.orderSense === 'up-to-down' ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </Button>
          </div>

          <Divider />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={search}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
              onClick={resetMutations}
            />
          </div>

          <div className={classes.body}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table aria-label="simple table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">#</TableCell>
                    <TableCell align="center">Flag</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Capital</TableCell>
                    <TableCell align="right">
                      Area&nbsp;(km<sup>2</sup>)
                    </TableCell>
                    <TableCell align="right">Population</TableCell>
                    <TableCell align="right">Languages</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countriesList.map((country, i) => (
                    <TableRow
                      key={country.name.common}
                      className={classes.tableRow}
                      onClick={() =>
                        handleSelectCountry(country.cca2.toLowerCase())
                      }
                    >
                      <TableCell align="center">{i + 1}</TableCell>
                      <TableCell align="center">
                        <Avatar
                          src={country.flags.svg}
                          className={classes.tableAvatar}
                        />
                      </TableCell>
                      <TableCell align="left">{country.name.common}</TableCell>
                      <TableCell align="left">{country.capital}</TableCell>
                      <TableCell align="right">
                        {country.area?.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {country.population?.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {country.languages
                          ? Object.keys(country.languages).map((lang) => {
                              return `${lang.toUpperCase()} `;
                            })
                          : ''}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default MainPage;
