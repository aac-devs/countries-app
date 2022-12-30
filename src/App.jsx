import { ThemeProvider } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { useState, useEffect } from 'react';
import Router from './AppRouter';
import { CountriesProvider } from './contexts/CountriesContext';
import updateDeviceScreen from './helpers/screen';
import theme from './themeConfig';

const App = () => {
  const [allowDrawing, setAllowDrawing] = useState(updateDeviceScreen());

  useEffect(() => {
    function updateResize() {
      setAllowDrawing(updateDeviceScreen());
    }

    let timeOut = 0;
    globalThis.addEventListener('resize', () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(updateResize, 100);
    });

    return () => globalThis.removeEventListener('resize');
  }, []);

  return (
    <>
      {allowDrawing ? (
        <ThemeProvider theme={theme}>
          <CountriesProvider>
            <Router />
          </CountriesProvider>
        </ThemeProvider>
      ) : (
        <Alert variant="filled" severity="warning">
          This Web App is only for desktop devices with screen size greater than
          1096px!
        </Alert>
      )}
    </>
  );
};

export default App;
