import React from 'react';
import { Playground } from 'docz';
import { Provider } from './Components/Provider/Provider';

export default ({ ...props }) => {
  return (
    <Provider noDefaultCss>
      <Playground {...props} />
    </Provider>
  );
};
