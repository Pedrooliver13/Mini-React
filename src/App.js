import React from 'react';
import Routes from './Routes';
// styled;
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './Theme/GlobalStyle';
import Colors from './Theme/Colors';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={Colors}>
        <GlobalStyled />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
