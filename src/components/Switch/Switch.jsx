import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

import { BaseInput } from '../../';

const Content = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.label`
  font-size: 12px;
  margin-right: 24px;
`;

const Input = styled.div`
  height: 24px;
  width: 48px;
  border-radius: 12px;
  background: ${({ value, theme }) =>
    value ? theme.palette.primary.main : theme.palette.disabled.main};
  padding: 2px;
  display: flex;
  flex-direction: row;
  margin: 0 8px;
  transition: 0.4s;

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
  font-size: 12px;
  font-weight: bold;
  color: ${({ value, theme }) =>
    value ? theme.palette.primary.main : theme.palette.disabled.main};
`;

export const Switch = ({ value, label, labelFalse, labelTrue, error, onChange, ...props }) => {
  const handleOnChange = e => {
    onChange(e, !value);
  };

  return (
    <BaseInput error={error}>
      <Content onClick={handleOnChange} {...props}>
        <Label>{label}</Label>

        <InputLabel value={false}>{labelFalse}</InputLabel>
        <Input value={value} />
        <InputLabel value={true}>{labelTrue}</InputLabel>
      </Content>
    </BaseInput>
  );
};

Switch.defaultProps = {
  value: false,
  onChange: () => {},
  labelTrue: 'Sim',
  labelFalse: 'Não',
};

Switch.propTypes = {
  value: P.bool,
  onChange: P.func,
  label: P.string,
  labelTrue: P.string,
  labelFalse: P.string,
  error: P.string,
};
