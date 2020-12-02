import React from 'react';
import styled from 'styled-components';

import { BaseInput } from '../BaseInput/BaseInput';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Check = styled.div`
  border-radius: ${({ variant }) => (variant === 'radio' ? '50%' : '5px')};
  border: 2px solid #aaa;
  margin-right: 10px;
  padding: 2px;
  width: 19px;
  height: 19px;
  box-sizing: border-box;
`;

const Checked = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme, color, value }) => value ? theme.palette[color].main : 'transparent'};
  border-radius: ${({ variant }) => (variant === 'radio' ? '50%' : '3px')};
  transition: 0.4s;
`;

const Label = styled.div`
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 30px);
`;

export const BoxInput = ({ color, variant, value, label, children, onChange, error, noForm, ...props }) => {
  return (
    <BaseInput error={error} noForm={noForm}>
      <Container
        {...props}
        onClick={(e) => {
          onChange(e, !value);
        }}>
        <Check variant={variant}>
          <Checked color={color} variant={variant} value={value} />
        </Check>

        {label && <Label dangerouslySetInnerHTML={{ __html: label }} />}

        {children && <Label>{children}</Label>}
      </Container>
    </BaseInput>
  );
};

BoxInput.defaultProps = {
  onChange: () => {},
  variant: 'radio',
  color: 'primary',
};
