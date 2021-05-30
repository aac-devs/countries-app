import { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  // Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Typography,
} from '@material-ui/core';
import CountriesContext from '../contexts/CountriesContext';
// import { generateStats } from '../helpers/statsData';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
    opacity: '0.7',
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
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  body: {
    marginTop: '16px',
    flexGrow: 1,
    overflowY: 'scroll',
    border: '1px solid #eee',
    borderRadius: '5px',
  },
  cellSize: {
    minWidth: '175px',
    width: '175px',
    // padding: '8px 16px',
    padding: '16px',
    fontSize: '18px',
  },
  cellPadding: {
    padding: '16px',
  },
  card: {
    heigh: '400px',
    maxHeight: '400px',
    width: '400px',
    maxWidth: '400px',
    marginRight: '16px',
    border: '1px solid #eee',
  },
  headBody: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {},
  button: {
    alignSelf: 'flex-end',
  },
  formControl: {
    minWidth: '350px',
    maxWidth: '350px',
    width: '350px',
    alignSelf: 'flex-end',
  },
  title: {
    margin: '0 auto',
    marginBottom: '8px',
  },
  cellInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // minWidth: '300px',
    // maxWidth: '300px',
    // width: '300px',
  },
  // row: {
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  //   flexWrap: 'no-wrap',
  // },
}));

// eslint-disable-next-line no-unused-vars
const mainRegions = [
  'World',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Polar',
];

const StatsPage = () => {
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

  console.clear();
  console.log({ statList });

  // TODO: fijar el header de la tabla. poner los enlaces de cada país para que abra en detalles. Acomodar el nombre del país para que quede junto a la bandera y el valor a la derecha de la celda

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Statistics
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
            <TableContainer component={Paper}>
              <Table aria-label="simple table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Region - Subregion</TableCell>
                    <TableCell align="center">
                      {statOption === 'surface'
                        ? 'Largest country (km\u00B2)'
                        : 'Most populated country'}
                    </TableCell>
                    <TableCell align="center">
                      {statOption === 'surface'
                        ? 'Less extensive country (km\u00B2)'
                        : 'Less populated country'}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {statList &&
                    Object.entries(statList).map((st) => (
                      <TableRow key={st[0]} className={classes.row}>
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
                            <Avatar src={st[1].more.flag} />
                            <Typography variant="body2">
                              {st[1].more.name}
                            </Typography>
                            <Typography variant="body2">
                              {statOption === 'surface'
                                ? st[1].more.area?.toLocaleString()
                                : st[1].more.population?.toLocaleString()}
                            </Typography>
                          </div>
                        </TableCell>
                        <TableCell className={classes.cellPadding}>
                          <div className={classes.cellInfo}>
                            <Avatar src={st[1].less.flag} />
                            <Typography variant="body2">
                              {st[1].less.name}
                            </Typography>
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

export default StatsPage;
