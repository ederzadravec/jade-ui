import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { getTheme } from '../../helpers';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

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
