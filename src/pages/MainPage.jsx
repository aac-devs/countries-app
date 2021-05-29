import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@material-ui/icons';
import CountriesContext from '../contexts/CountriesContext';
import mutatingCountryList, {
  languages,
  searchCountryCapital,
} from '../helpers/mutatingData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
    opacity: '0.7',
  },
  tableRow: {
    cursor: 'pointer',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  paper: {
    height: 'calc(100vh - 128px)',
    maxWidth: '1024px',
    minWidth: '1024px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 0',
  },
  body: {
    marginTop: '16px',
    flexGrow: 1,
    border: '1px solid #eee',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  tableContainer: {
    height: '100%',
  },
  formControl: {
    minWidth: '225px',
    maxWidth: '225px',
    width: '225px',
  },
  title: {
    margin: '0 auto',
    marginBottom: '8px',
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    alignSelf: 'flex-end',
    border: '1px solid #ccc',
    marginTop: '16px',
    width: '30%',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  searchIcon: {
    padding: '0 16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 0',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
}));

const MainPage = ({ history }) => {
  const classes = useStyles();
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
              // onClick={() => setSearch('')}
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
                      key={country.name}
                      className={classes.tableRow}
                      onClick={() =>
                        handleSelectCountry(country.alpha2Code.toLowerCase())
                      }
                    >
                      <TableCell align="center">{i + 1}</TableCell>
                      <TableCell align="center">
                        <Avatar
                          src={country.flag}
                          className={classes.tableAvatar}
                        />
                      </TableCell>
                      <TableCell align="left">{country.name}</TableCell>
                      <TableCell align="left">{country.capital}</TableCell>
                      <TableCell align="right">
                        {country.area?.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {country.population?.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {country.languages.map((lang, index) => {
                          let l = lang.iso639_2.toUpperCase();
                          if (index !== country.languages.length - 1) {
                            l += '/ ';
                          }
                          return l;
                        })}
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

MainPage.propTypes = {
  history: PropTypes.objectOf(
    PropTypes.shape({
      action: PropTypes.string,
      block: PropTypes.func,
      createHref: PropTypes.func,
      go: PropTypes.func,
      goBack: PropTypes.func,
      goForward: PropTypes.func,
      length: PropTypes.number,
      listen: PropTypes.func,
      location: PropTypes.objectOf(PropTypes.string),
      push: PropTypes.func,
      replace: PropTypes.func,
    }),
  ),
};

MainPage.defaultProps = {
  history: {
    action: '',
    block: () => {},
    createHref: () => {},
    go: () => {},
    goBack: () => {},
    goForward: () => {},
    length: 0,
    listen: () => {},
    location: {},
    push: () => {},
    replace: () => {},
  },
};

export default MainPage;
// 434
