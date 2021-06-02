import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import useStyles from './homeStyles';

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
