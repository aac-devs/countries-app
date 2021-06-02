import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import StatsPage from './pages/StatsPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import background from './assets/wallpaper.jpg';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  wallpaper: {
    flexGrow: 1,
    backgroundImage: `linear-gradient(rgba(5, 5, 5, 0), rgb(0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const AppRouter = () => {
  const classes = useStyles();
  return (
    <Router className="app-router">
      <Navbar />
      <div className={classes.offset} />
      <div className={classes.wallpaper}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/countries" component={MainPage} />
          <Route exact path="/countries/details/:name" component={DetailPage} />
          <Route exact path="/stats" component={StatsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
