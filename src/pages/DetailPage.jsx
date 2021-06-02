import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
import useStyles from './detailStyles';
import formatDetailData from '../helpers/formatDetailData';

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
      const detailData = await resp.json();
      setCountry(detailData);
      setData(formatDetailData(detailData));
    })();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.head}>
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
          </div>

          <div className={classes.body}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {data &&
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
