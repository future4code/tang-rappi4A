import React from 'react';
import { Router } from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './constants/theme';
import GlobalState from './global/GlobalState';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalState>
        <Router />
        </GlobalState>
      </ThemeProvider>
    </div>
  );
}

export default App;
