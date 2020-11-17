import React from 'react';
import Routes from './Routes';
// styled;
import Colors from './Theme/Colors';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './Theme/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={Colors}>
      <GlobalStyled />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
