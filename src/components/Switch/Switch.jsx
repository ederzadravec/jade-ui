import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

import { BaseInput } from '../../';

const Content = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.components.switch.labelSize}px;
  margin-right: 24px;
`;

const Input = styled.div`
  height: 24px;
  width: 48px;
  border-radius: 12px;
  background: ${({ value, theme, color }) =>
    value ? theme.palette[color].main : theme.palette.disabled.main};
  padding: 2px;
  display: flex;
  flex-direction: row;
  margin: 0 8px;
  transition: 0.4s;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

  &:after {
    content: ' ';
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #fff;
    transition: 0.4s;
    margin-left: ${({ value }) => (value ? '24px' : '0px')};
  }
`;

const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.components.switch.valueSize}px;
  font-weight: bold;
  color: ${({ value, theme, color }) =>
    value ? theme.palette[color].main : theme.palette.disabled.main};
`;

export const Switch = ({
  value,
  label,
  labelFalse,
  labelTrue,
  error,
  onChange,
  color,
  disabled,
  ...props
}) => {
  const handleOnChange = e => {
    onChange(e, !value);
  };

  return (
    <BaseInput error={error}>
      <Content onClick={e => disabled || handleOnChange(e)} disabled={disabled} {...props}>
        <Label>{label}</Label>

        <InputLabel value={false}>{labelFalse}</InputLabel>
        <Input value={value} color={color} disabled={disabled} />
        <InputLabel value={true} color={color}>
          {labelTrue}
        </InputLabel>
      </Content>
    </BaseInput>
  );
};

Switch.defaultProps = {
  value: false,
  onChange: () => {},
  labelTrue: 'Sim',
  labelFalse: 'Não',
  color: 'primary',
  disabled: false,
};

Switch.propTypes = {
  value: P.bool,
  disabled: P.func,
  onChange: P.func,
  label: P.string,
  labelTrue: P.string,
  labelFalse: P.string,
  error: P.string,
  color: P.string,
};
