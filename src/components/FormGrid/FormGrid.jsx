import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Row } from './Row';

const Container = styled.form`
  display: block;
  width: 100%;
`;

export const FormGrid = ({ config, children, ...props }) => {
  return (
    <Container {...props}>
      {config.map((row, key) => (
        <Row key={key} config={row} />
      ))}

      {children}
    </Container>
  );
};

FormGrid.defaultProps = {
  config: [],
};

FormGrid.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        schema: PropTypes.string.isRequired,
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
    )
  ).isRequired,
};
