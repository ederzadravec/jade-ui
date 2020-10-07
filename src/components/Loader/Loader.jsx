import React from 'react';
import * as Spinners from 'react-spinners';
import styled, { ThemeContext } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.unit * 3}px;
`;

export const Loader = ({ spinner, color, height, width, size, margin, ...props }) => {
  const theme = React.useContext(ThemeContext);

  const Component = React.useMemo(() => Spinners[spinner], [spinner]);

  return (
    <Container {...props}>
      <Component
        color={theme.palette[color].main}
        height={height}
        width={width}
        size={size}
        margin={margin}
      />
    </Container>
  );
};

Loader.defaultProps = {
  spinner: 'BounceLoader',
  color: 'primary',
  size: 50,
};
