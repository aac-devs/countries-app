import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const AppRouter = () => {
  const classes = useStyles();
  return (
    <Router>
      <Navbar />
      <div className={classes.offset} />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/countries" component={MainPage} />
          <Route exact path="/countries/details/:name" component={DetailPage} />
          <Route exact path="/about" component={AboutPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
