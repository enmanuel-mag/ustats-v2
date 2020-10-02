import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.css';
import MyRouts from './routes/';

function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <MyRouts />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
