import React from 'react';
import { Router } from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './constants/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
