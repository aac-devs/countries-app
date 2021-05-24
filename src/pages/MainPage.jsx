import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '768px',
    minWidth: '320px',
    backgroundColor: theme.palette.background.paper,
  },
  tableRoot: {
    // margin: '0 auto',
    width: '100%',
    maxWidth: '1300px',
    minWidth: '712px',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    borderBottom: '1px solid #eee',
    shadow: theme.shadows[15],
    cursor: 'pointer',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  tableRow: {
    cursor: 'pointer',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  avatar: {
    width: '75px',
    height: '75px',
    minWidth: '75px',
    minHeight: '75px',
  },
  avatarContainer: {
    width: '90px',
    minWidth: '90px',
  },
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionDesktop: {
    display: 'flex',
    padding: '16px',
    height: 'calc(100vh - 96px)',
    maxWidth: '1400px',
    backgroundColor: '#80cbc4',
    margin: '0 auto',
    // position: 'fixed',
    // top: '80px',
    // left: 0,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  table: {
    minWidth: '758px',
  },
  paper: {
    marginRight: '16px',
    width: '200px',
    minWidth: '200px',
    padding: '8px',
  },
}));

const MainPage = ({ history }) => {
  const [countriesList, setCountriesList] = useState([]);
  const classes = useStyles();

  const fetchCountries = async () => {
    const resp = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await resp.json();
    setCountriesList(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSelectCountry = (option) => {
    history.push(`/countries/details/:${option}`);
  };

  const fetchByRegion = async (region) => {
    const resp = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`,
    );
    const countries = await resp.json();
    setCountriesList(countries);
  };

  const fetchByLanguage = async (region) => {
    const resp = await fetch(`https://restcountries.eu/rest/v2/lang/${region}`);
    const countries = await resp.json();
    setCountriesList(countries);
  };

  const handleFilterByRegion = (option) => {
    if (option === 'all') {
      fetchCountries();
    } else {
      fetchByRegion(option);
    }
  };

  const handleFilterByLanguage = (option) => {
    fetchByLanguage(option);
  };

  return (
    <>
      <div className={classes.sectionDesktop}>
        {countriesList && (
          <>
            <Paper className={classes.paper}>
              <Typography variant="h6">Filter by:</Typography>
              <hr />
              <Typography variant="button">region</Typography>
              <br />
              <div style={{ paddingLeft: '20px' }}>
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByRegion('all')}
                >
                  All
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByRegion('africa')}
                >
                  Africa
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByRegion('americas')}
                >
                  Americas
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByRegion('asia')}
                >
                  Asia
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByRegion('europe')}
                >
                  Europe
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByRegion('oceania')}
                >
                  Oceania
                </Link>
              </div>
              <hr />
              <Typography variant="button">language</Typography>
              <br />
              <div style={{ paddingLeft: '20px' }}>
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('en')}
                >
                  English
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('fr')}
                >
                  French
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('es')}
                >
                  Spanish
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('de')}
                >
                  German
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('pt')}
                >
                  Portuguese
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('it')}
                >
                  Italian
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('ru')}
                >
                  Russian
                </Link>
                <br />
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => handleFilterByLanguage('ar')}
                >
                  Arabic
                </Link>
              </div>
            </Paper>
            <TableContainer component={Paper} className={classes.tableRoot}>
              <Table
                // className={classes.table}
                aria-label="simple table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Flag</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="right">Capital</TableCell>
                    <TableCell align="right">
                      Area&nbsp;(km<sup>2</sup>)
                    </TableCell>
                    <TableCell align="right">Population</TableCell>
                    <TableCell align="right">Languages</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countriesList.map((country) => (
                    <TableRow
                      key={country.name}
                      className={classes.tableRow}
                      onClick={() => handleSelectCountry(country.name)}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar src={country.flag} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {country.name}
                      </TableCell>
                      <TableCell align="right">{country.capital}</TableCell>
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
          </>
        )}
      </div>
      <div className={classes.sectionMobile}>
        <List className={classes.root}>
          {countriesList &&
            countriesList.map((country) => (
              <ListItem
                key={country.name}
                className={classes.listItem}
                onClick={() => handleSelectCountry(country.name)}
              >
                <ListItemAvatar className={classes.avatarContainer}>
                  <Avatar className={classes.avatar} src={country.flag} />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="button">{country.name}</Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="subtitle2" component="span">
                        {country.capital}
                      </Typography>
                      <br />
                      <Typography variant="caption" component="span">
                        Language(s):&nbsp;
                        {country.languages.map((lang, index) => {
                          let l = lang.iso639_2.toUpperCase();
                          if (index !== country.languages.length - 1) {
                            l += '/ ';
                          }
                          return l;
                        })}
                      </Typography>
                      <span className={classes.footer}>
                        <Typography
                          variant="caption"
                          align="justify"
                          component="span"
                        >
                          Area: {country.area?.toLocaleString()} km<sup>2</sup>
                        </Typography>
                        <Typography
                          variant="caption"
                          align="right"
                          component="span"
                        >
                          Population: {country.population?.toLocaleString()}
                        </Typography>
                      </span>
                    </>
                  }
                />
              </ListItem>
            ))}
        </List>
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
