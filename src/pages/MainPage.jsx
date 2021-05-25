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
import Divider from '@material-ui/core/Divider';

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
  tableAvatar: {
    width: '30px',
    height: '30px',
    minWidth: '30px',
    minHeight: '30px',
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

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const orderOptions = ['Name', 'Area', 'Population'];

const languages = [
  { name: 'English', code: 'en' },
  { name: 'French', code: 'fr' },
  { name: 'Spanish', code: 'es' },
  { name: 'German', code: 'de' },
  { name: 'Dutch', code: 'nl' },
  { name: 'Portuguese', code: 'pt' },
  { name: 'Italian', code: 'it' },
  { name: 'Russian', code: 'ru' },
  { name: 'Arabic', code: 'ar' },
];

const MainPage = ({ history }) => {
  const [countriesList, setCountriesList] = useState([]);
  const classes = useStyles();

  const fetchData = async (rute = '', option = '') => {
    const resp = await fetch(
      `https://restcountries.eu/rest/v2/${rute}${option}`,
    );
    const data = await resp.json();
    setCountriesList(data);
  };

  const orderList = (option) => {
    console.log({ option });
    const originalData = [...countriesList];
    const newData = originalData.sort((a, b) => {
      if (option === 'Name') {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      }
      if (option === 'Area') {
        if (a.area < b.area) {
          return 1;
        }
        if (a.area > b.area) {
          return -1;
        }
        return 0;
      }
      if (a.population < b.population) {
        return 1;
      }
      if (a.population > b.population) {
        return -1;
      }
      return 0;
    });
    setCountriesList(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectCountry = (option) => {
    history.push(`/countries/details/:${option}`);
  };

  return (
    <>
      <div className={classes.sectionDesktop}>
        {countriesList && (
          <>
            <Paper className={classes.paper}>
              <Typography variant="h6">
                Filter by:&nbsp;&nbsp;({countriesList.length})
              </Typography>
              {/* <hr /> */}
              <Divider />
              <div style={{ paddingLeft: '20px' }}>
                <Link
                  component="button"
                  href="/"
                  variant="body2"
                  onClick={() => fetchData('all')}
                >
                  All
                </Link>
              </div>
              <br />
              <Typography variant="button">region</Typography>
              <br />
              <div style={{ paddingLeft: '20px' }}>
                {regions.map((reg) => (
                  <React.Fragment key={`fragment${reg}`}>
                    <Link
                      key={`link${reg}`}
                      component="button"
                      href="/"
                      variant="body2"
                      onClick={() => fetchData('region/', reg.toLowerCase())}
                    >
                      {reg}
                    </Link>
                    <br key={`br${reg}`} />
                  </React.Fragment>
                ))}
              </div>
              <br />
              <Typography variant="button">language</Typography>
              <br />
              <div style={{ paddingLeft: '20px' }}>
                {languages.map((lang) => (
                  <React.Fragment key={`fragment${lang.name}`}>
                    <Link
                      key={`link${lang.name}`}
                      component="button"
                      href="/"
                      variant="body2"
                      onClick={() => fetchData('lang/', lang.code)}
                    >
                      {lang.name}
                    </Link>
                    <br key={`br${lang.name}`} />
                  </React.Fragment>
                ))}
              </div>
              <br />
              <Typography variant="h6">Order by:</Typography>
              <Divider />
              <div style={{ paddingLeft: '20px' }}>
                {orderOptions.map((opt) => (
                  <React.Fragment key={`fragment${opt}`}>
                    <Link
                      key={`link${opt}`}
                      component="button"
                      href="/"
                      variant="body2"
                      onClick={() => orderList(opt)}
                    >
                      {opt}
                    </Link>
                    <br key={`br${opt}`} />
                  </React.Fragment>
                ))}
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

// 434
export default MainPage;
