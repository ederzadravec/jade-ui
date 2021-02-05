import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../Grid/Grid';

const Container = styled(Grid)``;

export const Column = ({ type, schema, props, size, last, hide }) => {
  const Component = !hide()
    ? React.createElement(type, {
        name: schema,
        ...props(schema),
      })
    : null;

  return (
    <Container last={last} size={size}>
      {Component}
    </Container>
  );
};

Column.defaultProps = {
  size: { md: 12 },
  last: false,
  props: () => ({}),
  type: () => {},
  hide: () => false,
};

Column.propTypes = {
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
};
