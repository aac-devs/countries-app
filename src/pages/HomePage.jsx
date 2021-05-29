import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexGrow: 1,
  },
  title: {
    margin: '160px 0 48px 0',
    fontWeight: 400,
    fontSize: '80px',
    color: 'white',
    textShadow: '4px 4px 7px #ddd',
  },
  buttons: {
    color: '#000',
    margin: '0 24px',
    backgroundColor: '#c6ff00',
    width: '250px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#d500f9',
    },
  },
  footer: {
    padding: '32px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const HomePage = ({ history }) => {
  const classes = useStyles();
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

HomePage.propTypes = {
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

HomePage.defaultProps = {
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
export default HomePage;
