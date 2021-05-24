import { ThemeProvider } from '@material-ui/core/styles';
import Router from './AppRouter';
import theme from './themeConfig';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
