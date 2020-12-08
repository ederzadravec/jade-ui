import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { debounce as debounceFunc } from 'throttle-debounce';

import { BaseInput, hooks } from '../../';

const Label = styled.label`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0px;
  cursor: pointer;
  text-align: ${({ align }) => align};
  transition: 0.4s;

  margin-left: ${({ theme }) => theme.components.textArea.labelLeft}px;
  color: ${({ focus, theme }) => (focus ? theme.palette.primary.main : theme.palette.text.dark)};

  ${({ float, theme }) =>
    float
      ? `
        font-size: 12px;
        margin-top: ${theme.components.textArea.floatLabelTop}px;
        `
      : `
        font-size: 16px;
        margin-top: ${theme.components.textArea.labelTop}px;
      `};
`;

const Input = styled.textarea`
  border: none;
  ${({ theme }) =>
    `${theme.components.textArea.borderType} : 1px solid  ${theme.components.textArea.borderColor}`};
  border-radius: ${({ theme }) => theme.components.textArea.borderRadius}px;
  font-size: 16px;
  background: none;
  margin-top: 16px;
  padding: ${({ theme }) => theme.components.textArea.paddingInput};
  color: ${({ theme }) => theme.palette.text.dark};
  resize: vertical;

  &:focus {
    outline: none;
    ${({ theme }) =>
      `${theme.components.textArea.borderType} : 1px solid  ${theme.palette.primary.main}`};
  }

  ${({ error, theme }) => (error ? `border-color: ${theme.palette.error.main}` : '')};
  text-align: ${({ align }) => align  };
`;

const createDebounce = debounce => debounceFunc(debounce, exec => exec());

export const TextArea = ({
  label,
  error,
  align,
  value: valueProp,
  debounce,
  floatLabel,
  placeholder,
  onFocus,
  onChange,
  onBlur,
  ...props
}) => {
  const inputRef = React.useRef();
  const [{ init, value, isFocused }, setState] = hooks.useState({
    init: false,
    value: '',
    isFocused: false,
  });

  React.useEffect(() => {
    if (value !== valueProp) setState({ value: valueProp });
  }, [valueProp]);

  const onChangeDebounce = React.useCallback(createDebounce(debounce), []);

  React.useEffect(() => {
    if (init && value !== valueProp) onChangeDebounce(() => onChange(null, value));
  }, [value]);

  const handleOnChange = e => {
    setState({ value: e.target.value, init: true });
  };

  const handleOnFocus = e => {
    setState({ isFocused: true, init: true });
    onFocus(e, value);
  };

  const handleOnBlur = e => {
    setState({ isFocused: false, init: true });
    onBlur(e, value);
  };

  const hasValue = !R.isNil(value) && !R.isEmpty(value);
  const floatingLabel = hasValue || !!placeholder || floatLabel || isFocused;

  return (
    <BaseInput error={error} align={align}>
      <Label
        align={align}
        float={floatingLabel}
        focus={isFocused}
        onClick={() => inputRef.current.focus()}>
        {label}
      </Label>

      <Input
        ref={inputRef}
        align={align}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...props}
      />
    </BaseInput>
  );
};

TextArea.defaultProps = {
  align: 'left',
  floatLabel: false,
  debounce: 250,
  rows: 5,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
};
