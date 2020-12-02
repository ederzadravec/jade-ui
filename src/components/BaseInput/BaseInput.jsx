import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  min-height: ${({noForm})=> noForm ? "72px" : "unset"} ;

  margin-bottom: ${({ theme }) => theme.spacing.unit * 1}px;
`;

const Error = styled.label`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error.main};
  text-align: ${({ align }) => align};
`;

export const BaseInput = ({ error, children, align, ...props }) => {
  return (
    <Container {...props}>
      {children}

      <Error align={align}>{error}</Error>
    </Container>
  );
};

BaseInput.defaultProps = {
  align: 'left',
};
