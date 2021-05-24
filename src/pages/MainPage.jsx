import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '768px',
    minWidth: '320px',
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const MainPage = ({ history }) => {
  const [countriesList, setCountriesList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchCountries = async () => {
      const resp = await fetch('https://restcountries.eu/rest/v2/all');
      const countries = await resp.json();
      setCountriesList(countries);
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (option) => {
    console.log('handleSelectCountry', option);
    console.log(history);
    history.push(`/countries/details/:${option}`);
  };

  return (
    <>
      <div className={classes.sectionDesktop}>Desktop</div>
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
                          Area: {country.area} km2.
                        </Typography>
                        <Typography
                          variant="caption"
                          align="right"
                          component="span"
                        >
                          Population: {country.population} hab.
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
