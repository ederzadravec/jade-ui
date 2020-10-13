import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { getTheme } from '../../helpers';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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

export const Provider = ({ noDefaultCss, children, theme }) => {
  return (
    <>
      {!noDefaultCss && <GlobalStyle />}
      <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
    </>
  );
};

Provider.defaultProps = {
  theme: {},
  noDefaultCss: false,
};
