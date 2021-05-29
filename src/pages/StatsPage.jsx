import { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  // Avatar,
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
  Paper,
  Typography,
} from '@material-ui/core';
import CountriesContext from '../contexts/CountriesContext';

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
    minWidth: '125px',
    width: '125px',
    padding: '8px 16px',
  },
  cellPadding: {
    padding: '8px 16px',
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
}));

const StatsPage = () => {
  const classes = useStyles();
  const { regions } = useContext(CountriesContext);
  const [regionList, setRegionList] = useState([]);
  const [regionSelected, setRegionSelected] = useState('');

  useEffect(() => {
    if (regions) {
      const array = Object.keys(regions).map((reg) => reg);
      array.unshift('World');
      setRegionList(array);
      setRegionSelected('World');
    }
  }, [regions]);

  useEffect(() => {
    console.log('Estadisticas de', regionSelected);
  }, [regionSelected]);

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Statistics
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={regionSelected}
              onChange={(e) => setRegionSelected(e.target.value)}
              label="Select Region"
            >
              {regionList &&
                regionList.map((reg) => (
                  <MenuItem value={reg} key={reg}>
                    {reg}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          {/* <div className={classes.head}>
            <CardMedia
              component="img"
              alt={country.name}
              image={country.flag}
              title={country.name}
              className={classes.card}
            />
            <div className={classes.headBody}>
              <Typography gutterBottom variant="h3" align="center">
                {country.name}
              </Typography>
              <CardActions className={classes.button}>
                <Link to="/countries" className={classes.link}>
                  <Button size="small" color="primary">
                    back to countries list
                  </Button>
                </Link>
              </CardActions>
            </div>
          </div> */}

          <div className={classes.body}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {/* {data &&
                    data.map((d) => (
                      <TableRow key={d.title}>
                        <TableCell
                          align="left"
                          variant="head"
                          className={classes.cellSize}
                        >
                          {d.title}
                        </TableCell>
                        <TableCell align="left" className={classes.cellPadding}>
                          {d.value}
                        </TableCell>
                      </TableRow>
                    ))} */}
                  <TableRow>
                    <TableCell
                      align="left"
                      variant="head"
                      className={classes.cellSize}
                    >
                      columna 1
                    </TableCell>
                    <TableCell
                      align="left"
                      // variant="head"
                      className={classes.cellPadding}
                    >
                      columna 2
                    </TableCell>
                  </TableRow>
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
