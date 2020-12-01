import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { Space } from '../Space/Space';

const Container = styled(Space)`
  display: flex;
  flex-direction: row;
  width: calc(100% + ${({ spacing }) => spacing}px);
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: -${({ spacing }) => spacing / 2}px;
  margin-right: -${({ spacing }) => spacing / 2}px;
  transition: all ease 0.1s;
`;

const Content = styled(Space)`
  display: flex;
  flex-wrap: wrap;
  transition: all ease 0.1s;

  ${({ theme, size, spacing, direction }) => `
    flex-direction: ${direction};
    padding-left: ${spacing / 2}px;
    padding-right: ${spacing / 2}px;
    margin-bottom: ${spacing}px;

    width: ${(100 / 12) * (size.xl || size.lg || size.md || size.sm || size.xs || 12)}%;

    ${Object.keys(size)
      .map(key => theme.screens[key](`width:${(100 / 12) * size[key]}%`, size[key]))
      .join(';')}
  `};
`;

export const Grid = ({ container, children, ...props }) => {
  return container ? (
    <Container {...props}>{children}</Container>
  ) : (
    <Content {...props}>{children}</Content>
  );
};

Grid.defaultProps = {
  spacing: 24,
  container: false,
  size: { md: 12 },
  direction: 'row',
};

// Grid.propTypes = {
//   spacing: PropTypes.number,
//   container: PropTypes.bool,
//   size: PropTypes.shape({
//     xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
//     sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
//     md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
//     lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
//     xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
//   }),
// };
