import { ThemeProvider } from '@material-ui/core/styles';
import Router from './AppRouter';
import { CountriesProvider } from './contexts/CountriesContext';
import theme from './themeConfig';

const App = () => {
  return (
    <ThemeProvider theme={theme} className="theme-provider">
      <CountriesProvider className="countries-provider">
        <Router className="router" />
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default App;
