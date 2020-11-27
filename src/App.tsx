import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Merienda'].join(','),
  },
  palette: {
    secondary: {
      main: '#721121',
    },
  },
});
