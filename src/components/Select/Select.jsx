import React from 'react';
import styled, { css } from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import * as R from 'ramda';
import PropTypes from 'prop-types';

import { BaseInput, hooks } from '../../';
import { List } from './List';

const Label = styled.label`
  position: absolute;
  width: 100%;
  left: 0px;
  cursor: pointer;
  text-align: ${({ align }) => align};
  transition: 0.4s;

  color: ${({ focus, theme }) => (focus ? theme.palette.primary.main : theme.palette.text.dark)};

  ${({ float, theme }) =>
    float
      ? `
      margin-top: 0px;
      font-size: ${theme.components.select.floatLabel}px
  `
      : `
      margin-top: 20px;
      font-size: ${theme.components.select.label}px
    `}
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid
    ${({ theme, focus }) =>
      focus ? theme.palette.primary.main : theme.components.select.lineColor};
  background: none;
  margin-top: 16px;
  height: 32px;
  color: ${({ theme }) => theme.palette.text.dark};
  font-size: ${({ theme }) => theme.components.select.label}px;
  transition: 0.4s;
  outline: none;

  ${({ error, theme }) => (error ? `border-color: ${theme.palette.error.main}` : '')};
  text-align: ${({ align }) => align};
`;

const Icon = styled.span`
  transition: 0.4s;
  position: absolute;
  top: 20px;
  right: 8px;
  color: ${({ focus, theme }) => (focus ? theme.palette.primary.main : theme.palette.text.dark)};
  cursor: pointer;
`;

export const Select = ({
  multiple,
  value: valueProp,
  label,
  error,
  onChange,
  onFocus,
  onBlur,
  align,
  data: dataProp,
  config: configProp,
  ...props
}) => {
  const inputRef = React.useRef();
  const listRef = React.useRef();

  const [{ data, config, value, isFocused, showList }, setState] = hooks.useState({
    init: false,
    value: [],
    isFocused: false,
    showList: false,
    config: {},
    data: [],
  });

  React.useEffect(() => {
    if (value === valueProp) return () => {};

    let newValue = [];

    const newConfig = {
      value: configProp?.value || 'value',
      label: configProp?.label || 'label',
    };

    if (multiple && valueProp?.length) {
      newValue = valueProp.map(x => x[newConfig.value]);
    }

    if (!multiple && valueProp && typeof valueProp !== 'string' && Object.keys(valueProp).length) {
      newValue = [valueProp[newConfig.value]];
    }

    if (!multiple && typeof valueProp === 'string') {
      newValue = [valueProp];
    }

    setState({ config: newConfig, value: newValue });
  }, [valueProp]);

  React.useEffect(() => {
    let newValue = [];

    const newConfig = {
      value: configProp?.value || 'value',
      label: configProp?.label || 'label',
    };

    const newData = (R.is(Array, dataProp) ? dataProp : []).map(item => ({
      ...item,
      value: item[newConfig.value],
      label: item[newConfig.label],
    }));

    setState({ data: newData, config: newConfig });
  }, [dataProp]);

  const getValueToReturn = values => {
    let returnValue = null;

    if (multiple) {
      returnValue = values.length ? data.filter(x => values.includes(x.value)) : [null];
    } else {
      returnValue = values.length ? data.filter(x => values[0] === x.value) : [null];
    }

    return returnValue;
  };

  const handleOnChange = item => {
    let newValue = [];

    if (multiple) {
      newValue = value.includes(item.value)
        ? value.filter(x => x !== item.value)
        : [...value, item.value];
    } else {
      newValue = value[0] === item.value ? [] : [item.value];
    }

    setState({ value: newValue, showList: multiple, isFocused: multiple, init: true });

    const returnValue = getValueToReturn(newValue);

    onChange(null, multiple ? returnValue : returnValue[0]);
  };

  const handleOnFocus = e => {
    setState({ isFocused: true, showList: true, init: true });

    const returnValue = getValueToReturn(value);

    onFocus(e, multiple ? returnValue : returnValue[0]);
  };

  const handleOnClose = e => {
    setState({ showList: false, isFocused: false, init: true });

    const returnValue = getValueToReturn(value);

    onBlur(e, multiple ? returnValue : returnValue[0]);
  };

  const getLabel = () => {
    const values = value.length ? data.filter(x => value.includes(x.value)) : null;

    return values ? values.map(x => x.label).join(', ') : 'Selecione';
  };

  const hasValue = !R.isNil(value) && !R.isEmpty(value);
  const floatingLabel = hasValue || isFocused;

  return (
    <>
      <BaseInput error={error} align={align}>
        <Label
          align={align}
          float={floatingLabel}
          focus={isFocused}
          onClick={() => inputRef.current.focus()}>
          {label}
        </Label>

        <Input
          disabled={showList}
          ref={inputRef}
          align={align}
          onFocus={handleOnFocus}
          focus={isFocused}
          value={floatingLabel ? getLabel() : ''}
          {...props}
        />

        <Icon as={FaAngleDown} focus={isFocused} onClick={() => inputRef.current.focus()} />

        <List
          innerRef={listRef}
          visible={showList}
          onClose={handleOnClose}
          data={data}
          value={value}
          onChange={handleOnChange}
        />
      </BaseInput>
    </>
  );
};

Select.defaultProps = {
  multiple: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  data: [],
};

Select.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
};
