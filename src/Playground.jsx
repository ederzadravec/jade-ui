import React from 'react';
import { Playground } from 'docz';
import { Provider } from './components/Provider/Provider';
import { createGlobalStyle } from 'styled-components';

export default ({ ...props }) => {
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Provider noDefaultCss>
        <Playground {...props} />
      </Provider>
    </>
  );
};

