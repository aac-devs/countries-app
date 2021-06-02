import { useHistory } from 'react-router';
import { Button, Typography } from '@material-ui/core';
import useStyles from './homeStyles';

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          Countries App
        </Typography>
        <div>
          <Button
            size="large"
            variant="contained"
            className={classes.buttons}
            onClick={() => history.push('/countries')}
          >
            Go to countries list
          </Button>
          <Button
            size="large"
            variant="contained"
            className={classes.buttons}
            onClick={() => history.push('/stats')}
          >
            Go to statistics
          </Button>
        </div>
      </div>
      <div className={classes.footer}>&copy; Andrés Arana Castillo - 2021</div>
    </div>
  );
};

export default HomePage;
