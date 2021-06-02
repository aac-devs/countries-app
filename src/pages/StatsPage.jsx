import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Typography,
} from '@material-ui/core';
import useStyles, { mainRegions } from './statsStyles';
import CountriesContext from '../contexts/CountriesContext';

const StatsPage = ({ history }) => {
  const classes = useStyles();
  const { stats } = useContext(CountriesContext);
  const [statOption, setStatOption] = useState('surface');
  const [statList, setStatList] = useState({});

  useEffect(() => {
    if (JSON.stringify(stats) !== '{}') {
      if (statOption === 'surface') {
        setStatList(stats.surface);
      } else {
        setStatList(stats.population);
      }
    }
  }, [stats, statOption]);

  const handleSelectCountry = (option) => {
    history.push(`/countries/details/:${option}`);
  };

  const handleKeyPress = () => {};

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Statistics with Countries
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Stats option
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={statOption}
              onChange={(e) => setStatOption(e.target.value)}
              label="Stats option"
            >
              <MenuItem value="surface">Surface</MenuItem>
              <MenuItem value="population">Population</MenuItem>
            </Select>
          </FormControl>

          <div className={classes.body}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table aria-label="simple table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Region - Subregion</TableCell>
                    <TableCell align="center" className={classes.row}>
                      {statOption === 'surface'
                        ? 'Largest country (km\u00B2)'
                        : 'Most populated country'}
                    </TableCell>
                    <TableCell align="center" className={classes.row}>
                      {statOption === 'surface'
                        ? 'Less extensive country (km\u00B2)'
                        : 'Less populated country'}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {statList &&
                    Object.entries(statList).map((st) => (
                      <TableRow key={st[0]}>
                        {mainRegions.includes(st[0]) ? (
                          <TableCell
                            align="left"
                            variant="head"
                            className={classes.cellPadding}
                          >
                            {st[0]}
                          </TableCell>
                        ) : (
                          <TableCell
                            align="left"
                            className={classes.cellPadding}
                          >
                            &nbsp;&nbsp;{st[0]}
                          </TableCell>
                        )}
                        <TableCell className={classes.cellPadding}>
                          <div className={classes.cellInfo}>
                            <div
                              tabIndex={0}
                              onKeyPress={handleKeyPress}
                              role="button"
                              className={classes.cellRight}
                              onClick={() =>
                                handleSelectCountry(
                                  st[1].more.alpha2Code?.toLowerCase(),
                                )
                              }
                            >
                              <div className={classes.cellAvatar}>
                                <Avatar src={st[1].more.flag} />
                              </div>
                              <Typography variant="body2">
                                {st[1].more.name}
                              </Typography>
                            </div>
                            <Typography variant="body2">
                              {statOption === 'surface'
                                ? st[1].more.area?.toLocaleString()
                                : st[1].more.population?.toLocaleString()}
                            </Typography>
                          </div>
                        </TableCell>
                        <TableCell className={classes.cellPadding}>
                          <div className={classes.cellInfo}>
                            <div
                              tabIndex={0}
                              onKeyPress={handleKeyPress}
                              role="button"
                              className={classes.cellRight}
                              onClick={() =>
                                handleSelectCountry(
                                  st[1].less.alpha2Code?.toLowerCase(),
                                )
                              }
                            >
                              <div className={classes.cellAvatar}>
                                <Avatar src={st[1].less.flag} />
                              </div>
                              <Typography variant="body2">
                                {st[1].less.name}
                              </Typography>
                            </div>
                            <Typography variant="body2">
                              {statOption === 'surface'
                                ? st[1].less.area?.toLocaleString()
                                : st[1].less.population?.toLocaleString()}
                            </Typography>
                          </div>
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

StatsPage.propTypes = {
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

StatsPage.defaultProps = {
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

export default StatsPage;
