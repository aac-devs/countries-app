import { ThemeProvider } from '@material-ui/core/styles';
import Router from './AppRouter';
import { CountriesProvider } from './contexts/CountriesContext';
import theme from './themeConfig';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CountriesProvider>
        <Router />
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default App;
