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
import { Link } from 'react-router-dom';
// import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { array } from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';

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
    maxWidth: '1024px',
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
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  avatar: {
    margin: '0 auto',
    // width: '400px',
    // height: '400px',
    // minWidth: '400px',
    // minHeight: '400px',
  },
}));

const DetailPage = ({ history = {} }) => {
  const [country, setCountry] = useState({});
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const name = history.location.pathname.split('/')[3].replace(':', '');
      console.log({ name });
      const resp = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${name}`,
      );
      const c = await resp.json();
      setCountry(c);
    })();
  }, []);

  // const trans =
  if (country.translations) {
    const keys = Object.keys(country.translations);
    const values = Object.values(country.translations);
    console.log(keys);
    console.log(values);
    console.log(Object.entries(country.translations));
    const array = Object.entries(country.translations).map(
      (item) => `${item[0]}: ${item[1]}`,
    );
    console.log(array);

    // for(let i = 0; i < keys.length; i++){
    //   array.push(`"${keys[i]}": "${values[i]}"`)
    // }
    // console.log(array);
    // for (let prop in country.translations) {
    //   console.log(prop);
    // }
  }

  return (
    <div className={classes.container}>
      {country && (
        <Card className={classes.root}>
          {/* <CardActionArea> */}
          <CardContent>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt={country.name}
                image={country.flag}
                title={country.name}
                style={{
                  heigh: '400px',
                  maxHeight: '400px',
                  width: '400px',
                  maxWidth: '400px',
                  marginRight: '16px',
                }}
              />
              <Typography gutterBottom variant="h4" align="center">
                {country.name}
              </Typography>
            </div>
            <br />
            <TableContainer component={Paper} className={classes.tableRoot}>
              <Table
                // className={classes.table}
                aria-label="simple table"
              >
                <TableBody>
                  <TableRow>
                    <TableCell align="left" variant="head">
                      Native name
                    </TableCell>
                    <TableCell align="left">{country.nativeName}.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="left"
                      variant="head"
                      style={{ minWidth: 'max-content' }}
                    >
                      Alternative spelling
                    </TableCell>
                    <TableCell align="left">
                      {country.altSpellings?.map(
                        (spe, i) =>
                          `${spe}${
                            i !== country.altSpellings.length - 1 ? ', ' : '.'
                          }`,
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" variant="head">
                      Translations
                    </TableCell>
                    <TableCell align="left">
                      {country.translations &&
                        Object.entries(country.translations).map((tr) => (
                          <span>
                            <strong>{tr[0]}:</strong> {tr[1]},&nbsp;
                          </span>
                        ))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Divider />
            <Typography gutterBottom variant="subtitle2">
              Native name
            </Typography> */}
          </CardContent>
          {/* <CardContent>
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
                {country.area?.toLocaleString()} km<sup>2</sup>
              </Typography>
              <Typography gutterBottom variant="body2">
                <strong>Population: </strong>
                {country.population?.toLocaleString()}
              </Typography>
            </div>
            <hr />
            <Typography gutterBottom variant="body2">
              <strong>Currencies: </strong>
              {country.currencies &&
                country.currencies.map((cur, index) => (
                  <span
                    style={{ marginLeft: '24px', display: 'block' }}
                    key={cur.code}
                  >
                    <strong>Code </strong>&nbsp;
                    {cur.code}
                    <br />
                    <strong>Symbol </strong>&nbsp;
                    {cur.symbol}
                    <br />
                    <strong>Name </strong>&nbsp;
                    {cur.name}
                    {index !== country.currencies.length - 1 && (
                      <>
                        <br /> <br />
                      </>
                    )}
                  </span>
                ))}
            </Typography>
            <hr />
            <Typography gutterBottom variant="body2">
              <strong>Timezones: </strong>
              {country.timezones &&
                country.timezones.map((time, index) => {
                  let tz = time;
                  if (index !== country.timezones.length - 1) {
                    tz += ', ';
                  }
                  return tz;
                })}
            </Typography>
            <hr />
          </CardContent> */}
          <CardActions>
            <Link to="/countries" className={classes.link}>
              <Button size="small" color="primary">
                back to countries
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
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
