import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { getTheme } from '../../helpers';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans';
    font-size: 12px;
  }

  html {
    height: 100vh;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    border: 0;
  };

  #root {
    min-height: 100vh;
    display: flex;
  }

`;

export const Provider = ({ children, theme }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
    </>
  );
};

Theme.defaultProps = {
  theme: {},
};
