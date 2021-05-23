import { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    minWidth: 320,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    borderBottom: '1px solid #eee',
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
  },
}));

const MainPage = () => {
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

  console.log(countriesList);

  return (
    <List className={classes.root}>
      {countriesList &&
        countriesList.map((country) => (
          <ListItem key={country.name} className={classes.listItem}>
            <ListItemAvatar className={classes.avatarContainer}>
              <Avatar className={classes.avatar} src={country.flag} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography variant="button">{country.name}</Typography>
                </>
              }
              secondary={
                <>
                  <Typography variant="subtitle2">{country.capital}</Typography>
                  <Typography variant="caption">
                    Language(s):&nbsp;
                    {country.languages.map((lang, index) => {
                      let l = lang.iso639_2.toUpperCase();
                      if (index !== country.languages.length - 1) {
                        l += '/ ';
                      }
                      return l;
                    })}
                  </Typography>
                  <div className={classes.footer}>
                    <Typography variant="caption" align="justify">
                      Area: {country.area} km2.
                    </Typography>
                    <Typography variant="caption" align="right">
                      Population: {country.population} hab.
                    </Typography>
                  </div>
                </>
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default MainPage;
