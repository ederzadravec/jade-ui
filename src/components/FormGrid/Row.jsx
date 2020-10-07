import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../Grid/Grid';
import { Column } from './Column';

const Container = styled(Grid)`
  width: 100%;
`;

export const Row = ({ config }) => {
  return (
    <Container container>
      {config.map((column, key) => (
        <Column key={key} last={config.length - 1 <= key} {...column} />
      ))}
    </Container>
  );
};

Row.defaultProps = {
  config: [],
};

Row.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.shape({
        xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      }),
      props: PropTypes.func.isRequired,
      type: PropTypes.node.isRequired,
      hide: PropTypes.func,
    })
  ).isRequired,
};
