import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    // height: '100%',
    // padding: '20px',
    // backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  root: {
    maxWidth: '768px',
    margin: '16px',
    [theme.breakpoints.down('xs')]: {
      margin: '16px 8px',
    },
  },
  inline: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));

const DetailPage = ({ history = {} }) => {
  const [country, setCountry] = useState({});
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const name = history.location.pathname.split('/')[3].replace(':', '');
      const resp = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
      const c = await resp.json();
      setCountry(c[0]);
    })();
  }, []);

  return (
    <div className={classes.container}>
      {country && (
        <Card className={classes.root}>
          {/* <CardActionArea> */}
          <CardMedia
            component="img"
            alt={country.name}
            image={country.flag}
            title={country.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h4">
              {country.name}
            </Typography>
            <Typography gutterBottom variant="body2">
              <strong>Native name: </strong>
              {country.nativeName}
            </Typography>
            <Typography gutterBottom variant="body2">
              <strong>Denonym: </strong>
              {country.demonym}
            </Typography>
            <Typography gutterBottom variant="body2">
              <strong>Capital: </strong>
              {country.capital}
            </Typography>
            {/* <hr /> */}
            <div className={classes.inline}>
              <Typography gutterBottom variant="body2">
                <strong>Region: </strong>
                {country.region}
              </Typography>
              <Typography gutterBottom variant="body2">
                <strong>Subregion: </strong>
                {country.subregion}
              </Typography>
            </div>
            <hr />
            <Typography gutterBottom variant="body2">
              <strong>Languages: </strong>
              {country.languages &&
                country.languages.map((lang, index) => {
                  let l = lang.iso639_2.toUpperCase();
                  if (index !== country.languages.length - 1) {
                    l += ' - ';
                  }
                  return l;
                })}
            </Typography>
            <div className={classes.inline}>
              <Typography gutterBottom variant="body2">
                <strong>Area: </strong>
                {country.area} km2
              </Typography>
              <Typography gutterBottom variant="body2">
                <strong>Population: </strong>
                {country.population} hab.
              </Typography>
            </div>
            <hr />
            <Typography gutterBottom variant="body2">
              <strong>Currencies: </strong>
              {country.currencies &&
                country.currencies.map((cur, index) => {
                  // const code = cur.code;
                  // const name = cur.name;
                  // const symbol = cur.symbol;

                  // if (index !== country.currencies.length - 1) {
                  //   l += ' - ';
                  // }
                  return (
                    <div style={{ marginLeft: '24px' }}>
                      <strong>Code </strong>&nbsp;
                      {cur.code}
                      <br />
                      <strong>Symbol </strong>&nbsp;
                      {cur.symbol}
                      <br />
                      <strong>Name </strong>&nbsp;
                      {cur.name}
                      {/* <hr /> */}
                      {index !== country.currencies.length - 1 && <hr />}
                    </div>
                  );
                })}
            </Typography>
            <hr />
            <Typography gutterBottom variant="body2">
              <strong>Timezones: </strong>
              {country.timezones &&
                country.timezones.map((time, index) => {
                  let tz = time;
                  if (index !== country.timezones.length - 1) {
                    tz += ' - ';
                  }
                  return tz;
                })}
            </Typography>
            <hr />
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              back to countries
            </Button>
          </CardActions>
        </Card>
      )}
      {/* <div>
        <h1>Detail Page</h1>
        <pre>{JSON.stringify(country)}</pre>
      </div> */}
    </div>
  );
};

DetailPage.propTypes = {
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
      location: PropTypes.objectOf({
        hash: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
        state: PropTypes.string,
      }),

      push: PropTypes.func,
      replace: PropTypes.func,
    }),
  ),
};

DetailPage.defaultProps = {
  history: {
    action: '',
    block: () => {},
    createHref: () => {},
    go: () => {},
    goBack: () => {},
    goForward: () => {},
    length: 0,
    listen: () => {},
    location: {
      hash: '',
      pathname: '',
      search: '',
      state: '',
    },
    push: () => {},
    replace: () => {},
  },
};

export default DetailPage;
