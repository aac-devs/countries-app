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
} from '@material-ui/core';
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@material-ui/icons';
import CountriesContext from '../contexts/CountriesContext';
import mutatingCountryList, { languages } from '../helpers/mutatingData';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
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
}));

const MainPage = ({ history }) => {
  const classes = useStyles();
  const { countries, regions } = useContext(CountriesContext);
  const [countriesList, setCountriesList] = useState(countries);
  const [regionSelected, setRegionSelected] = useState('World');
  const [subregionSelected, setSubregionSelected] = useState('All');
  const [languageSelected, setLanguageSelected] = useState('None');
  const [orderBy, setOrderBy] = useState('None');
  const [orderSense, setOrderSense] = useState('up-to-down');

  const handleSelectCountry = (option) => {
    history.push(`/countries/details/:${option}`);
  };

  const handleRegionChange = ({ target: { value: reg } }) => {
    setRegionSelected(reg);
    setSubregionSelected('All');
  };

  const handleOrderSense = () => {
    if (orderSense === 'up-to-down') {
      setOrderSense('down-to-up');
    } else {
      setOrderSense('up-to-down');
    }
  };

  useEffect(() => {
    setCountriesList(countries);
  }, [countries]);

  useEffect(() => {
    const newList = mutatingCountryList(
      countries,
      regionSelected,
      subregionSelected,
      languageSelected,
      orderBy,
      orderSense,
    );
    setCountriesList(newList);
  }, [
    regionSelected,
    subregionSelected,
    languageSelected,
    orderBy,
    orderSense,
  ]);

  // TODO: Falta poner un título que muestre las opciones seleccionadas y la cantidad de paises devueltos

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.head}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={regionSelected}
                onChange={handleRegionChange}
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
                value={subregionSelected}
                onChange={(e) => setSubregionSelected(e.target.value)}
                label="Select Sub-region"
              >
                <MenuItem value="All">All</MenuItem>
                {regions[regionSelected] &&
                  regions[regionSelected].map((sub) => (
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
                value={languageSelected}
                onChange={(e) => setLanguageSelected(e.target.value)}
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
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
                label="Order by"
              >
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Name">Name</MenuItem>
                <MenuItem value="Area">Area</MenuItem>
                <MenuItem value="Population">Population</MenuItem>
              </Select>
            </FormControl>
            <Button variant="outlined" onClick={handleOrderSense}>
              {orderSense === 'up-to-down' ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </Button>
          </div>
          <Divider />
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

// 434
export default MainPage;

// {/* <div className={classes.sectionMobile}>
// <List className={classes.root}>
//   {countriesList &&
//     countriesList.map((country) => (
//       <ListItem
//         key={country.name}
//         className={classes.listItem}
//         onClick={() => handleSelectCountry(country.name)}
//       >
//         <ListItemAvatar className={classes.avatarContainer}>
//           <Avatar className={classes.avatar} src={country.flag} />
//         </ListItemAvatar>

//         <ListItemText
//           primary={
//             <Typography variant="button">{country.name}</Typography>
//           }
//           secondary={
//             <>
//               <Typography variant="subtitle2" component="span">
//                 {country.capital}
//               </Typography>
//               <br />
//               <Typography variant="caption" component="span">
//                 Language(s):&nbsp;
//                 {country.languages.map((lang, index) => {
//                   let l = lang.iso639_2.toUpperCase();
//                   if (index !== country.languages.length - 1) {
//                     l += '/ ';
//                   }
//                   return l;
//                 })}
//               </Typography>
//               <span className={classes.footer}>
//                 <Typography
//                   variant="caption"
//                   align="justify"
//                   component="span"
//                 >
//                   Area: {country.area?.toLocaleString()} km<sup>2</sup>
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   align="right"
//                   component="span"
//                 >
//                   Population: {country.population?.toLocaleString()}
//                 </Typography>
//               </span>
//             </>
//           }
//         />
//       </ListItem>
//     ))}
// </List>
// </div> */}
