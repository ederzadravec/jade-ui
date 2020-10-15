import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

const Content = styled.div`
  height: max-content;
  ${({ theme, size }) => `
    width: ${(100 / 12) * (size.xl || size.lg || size.md || size.sm || size.xs || 12)}%;

    ${Object.keys(size)
      .map(key => theme.screens[key](`width:${(100 / 12) * size[key]}%`, size[key]))
      .join(';')}
  `}
`;

export const Grid = ({ container, children, ...props }) => {
  return container ? (
    <Container {...props}>{children}</Container>
  ) : (
    <Content {...props}>{children}</Content>
  );
};

Grid.defaultProps = {
  container: false,
  size: { md: 12 },
};

Grid.propTypes = {
  container: PropTypes.bool,
  size: PropTypes.shape({
    xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  }),
};
