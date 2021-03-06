import React from 'react';
import * as Spinners from 'react-spinners';
import styled, { ThemeContext } from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const LoaderComponent = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  flex: 1;
  transition: 0.4s;
  opacity: ${({ show }) => (show ? 1 : 0)};
  align-self: center;
`;

const Children = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  position: relative;
  width: 100%;
  z-index: 1;
  transition: 0.4s;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const Loader = ({
  show,
  spinner,
  color,
  height,
  width,
  size,
  margin,
  children,
  direction,
  ...props
}) => {
  const theme = React.useContext(ThemeContext);

  const Component = React.useMemo(() => Spinners[spinner], [spinner]);

  return (
    <Container {...props}>
      <LoaderComponent show={show}>
        <Component
          color={theme.palette[color].main}
          height={height}
          width={width}
          size={size}
          margin={margin}
        />
      </LoaderComponent>

      <Children show={!show} direction={direction}>
        {children}
      </Children>
    </Container>
  );
};

Loader.defaultProps = {
  direction: 'row',
  spinner: 'BounceLoader',
  color: 'primary',
  size: 50,
  show: false,
};
