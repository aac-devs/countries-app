import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardActions,
  CardMedia,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  stLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  stRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
  },
  stPaper: {
    height: 'calc(100vh - 128px)',
    maxWidth: '1024px',
    minWidth: '1024px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  stHead: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  stBody: {
    marginTop: '16px',
    flexGrow: 1,
    overflowY: 'scroll',
    border: '1px solid #eee',
    borderRadius: '5px',
  },
  stCellSize: {
    minWidth: '125px',
    width: '125px',
    padding: '8px 16px',
  },
  stCellPadding: {
    padding: '8px 16px',
  },
}));

const formatData = (o) => {
  const newData = [
    { title: 'Native name', value: o.nativeName },
    {
      title: 'Alternative spelling',
      value: `${o.altSpellings.map(
        (spe, i) => `${i === 0 ? spe : ` ${spe}`}`,
      )}`,
    },
    {
      title: 'Translations',
      value: `French: "${o.translations.fr}", Spanish: "${o.translations.es}", German: "${o.translations.de}", Japanesse: "${o.translations.ja}", Portuguese: "${o.translations.pt}", Italian: "${o.translations.it}", Breton: "${o.translations.br}"`,
    },
    { title: 'Demonym', value: o.demonym },
    { title: 'Region', value: o.region },
    { title: 'Subregion', value: o.subregion },
    {
      title: 'Languages',
      value: `${o.languages.map(
        (lng, i) => `${i === 0 ? lng.name : ` ${lng.name}`}`,
      )}`,
    },
    { title: 'Capital', value: o.capital },
    { title: 'Numeric Code', value: o.numericCode },
    { title: 'Alpha codes', value: `${o.alpha2Code} - ${o.alpha3Code}` },
    {
      title: 'Top level domains',
      value: `${o.topLevelDomain.map(
        (tld, i) => `${i === 0 ? tld : ` ${tld}`}`,
      )}`,
    },
    {
      title: 'Calling codes',
      value: `${o.callingCodes.map(
        (clc, i) => `${i === 0 ? clc : ` ${clc}`}`,
      )}`,
    },
    { title: 'Area', value: `${o.area.toLocaleString()} km\u00B2` },
    {
      title: 'Location',
      value: `Lat: ${o.latlng[1]}\u00B0, Long: ${o.latlng[0]}\u00B0`,
    },
    {
      title: 'Time zones',
      value: `${o.timezones.map((tmz, i) => `${i === 0 ? tmz : ` ${tmz}`}`)}`,
    },
    { title: 'Population', value: o.population.toLocaleString() },
    {
      title: 'Currencies',
      value: `${o.currencies.map(
        (cur, i) =>
          `${
            i === 0
              ? `${cur.symbol} - ${cur.code} - ${cur.name}`
              : ` ${cur.symbol} - ${cur.code} - ${cur.name}`
          }`,
      )}`,
    },
  ];
  return newData;
};

const DetailPage = ({ history = {} }) => {
  const [country, setCountry] = useState({});
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const name = history.location.pathname.split('/')[3].replace(':', '');
      const resp = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${name}`,
      );
      const c = await resp.json();
      setCountry(c);
      setData(formatData(c));
    })();
  }, []);

  return (
    <>
      <div className={classes.stRoot}>
        <Paper className={classes.stPaper}>
          <div className={classes.stHead}>
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
                border: '1px solid #eee',
              }}
            />
            <Typography gutterBottom variant="h3" align="center">
              {country.name}
            </Typography>
            <CardActions>
              <Link to="/countries" className={classes.stLink}>
                <Button size="small" color="primary">
                  back to countries
                </Button>
              </Link>
            </CardActions>
          </div>

          <div className={classes.stBody}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {data &&
                    data.map((d) => (
                      <TableRow key={d.title}>
                        <TableCell
                          align="left"
                          variant="head"
                          className={classes.stCellSize}
                        >
                          {d.title}
                        </TableCell>
                        <TableCell
                          align="left"
                          className={classes.stCellPadding}
                        >
                          {d.value}
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
