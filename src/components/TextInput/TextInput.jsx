import React from 'react';
import styled, { css } from 'styled-components';
import { debounce as debounceFunc } from 'throttle-debounce';
import * as R from 'ramda';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import PropTypes from 'prop-types';

import { BaseInput, hooks } from '../../';

const Label = styled.label`
  position: absolute;
  width: 100%;
  left: 0px;
  cursor: pointer;
  text-align: ${({ align }) => align};
  transition: 0.4s;

  color: ${({ focus, theme }) => (focus ? theme.palette.primary.main : theme.palette.text.dark)};

  ${({ float }) =>
    float
      ? `
      margin-top: 0px;
      font-size: 12px
  `
      : `
      margin-top: 20px;
      font-size: 16px
    `}
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.components.textInput.lineColor};
  background: none;
  font-size: 16px;
  margin-top: 16px;
  color: ${({ theme }) => theme.palette.text.dark};
  height: 32px;
  transition: 0.4s;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  ${({ error, theme }) => (error ? `border-color: ${theme.palette.error.main}` : '')};
  text-align: ${({ align }) => align};
`;

const createDebounce = debounce => debounceFunc(debounce, exec => exec());

const unMask = (variant, value) => {
  const masks = {
    default: () => value,
    money: () => value.replace('.', '').replace(',', '.'),
    decimal: () => value.replace('.', '').replace(',', '.'),
    cpf: () => value.replace(/\D/g, ''),
    cnpj: () => value.replace(/\D/g, ''),
    phone: () => value.replace(/\D/g, ''),
    'postal-code': () => value.replace(/\D/g, ''),
    'credit-card': () => value.replace(/\D/g, ''),
  };

  return masks[variant] ? masks[variant]() : masks.default();
};

const getMask = (variant, config) => {
  const masks = {
    default: () => null,
    numeric: () => ({
      mask: createNumberMask({
        prefix: '',
        includeThousandsSeparator: false,
        decimalSymbol: '',
        thousandsSeparatorSymbol: '',
        decimalLimit: 0,
        integerLimit: config.maxlength || 1,
      }),
    }),
    date: () => ({ mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }),
    timedate: () => ({
      mask: [
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        ':',
        /\d/,
        /\d/,
      ],
    }),
    money: () => ({
      mask: createNumberMask({
        prefix: 'R$',
        includeThousandsSeparator: true,
        decimalSymbol: ',',
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        allowNegative: true,
        ...config,
      }),
    }),
    decimal: () => ({
      mask: createNumberMask({
        prefix: '',
        integerLimit: 3,
        decimalLimit: 2,
        decimalSymbol: ',',
        allowDecimal: true,
        requireDecimal: true,
        allowNegative: true,
        ...config,
      }),
    }),
    percent: () => ({
      mask: createNumberMask({
        prefix: '',
        sufix: '%',
        integerLimit: 3,
        decimalLimit: 2,
        decimalSymbol: '.',
        allowDecimal: true,
        requireDecimal: true,
        ...config,
      }),
    }),
    cpf: () => ({
      mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    }),
    cnpj: () => ({
      mask: [
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ],
    }),
    phone: () => ({
      placeholderChar: '\u2000',
      mask: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/],
    }),
    'postal-code': () => ({
      mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    }),
    'credit-card': () => ({
      mask: [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ],
    }),
    custom: () => config,
  };

  return masks[variant] ? masks[variant]() : masks.default();
};

export const TextInput = ({
  variant,
  value: valueProp,
  label,
  error,
  floatLabel,
  placeholder,
  debounce,
  onChange,
  onBlur,
  onFocus,
  mask,
  maskConfig,
  align,
  ...props
}) => {
  const inputRef = React.useRef();
  const [{ init, value, isFocused }, setState] = hooks.useState({
    init: false,
    value: '',
    isFocused: false,
  });

  React.useEffect(() => {
    if (value !== valueProp) {
      if (!valueProp) inputRef.current.value = valueProp;
      setState({ value: valueProp });
    }
  }, [valueProp]);

  const onChangeDebounce = React.useCallback(createDebounce(debounce), []);

  React.useEffect(() => {
    if (init && value !== valueProp) onChangeDebounce(() => onChange(null, value, unMask(value)));
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
  const floatingLabel = mask || hasValue || !!placeholder || floatLabel || isFocused;

  const generateMask = React.useMemo(() => getMask(variant, maskConfig), [maskConfig, variant]);

  return (
    <BaseInput error={error} align={align}>
      <Label
        align={align}
        float={floatingLabel}
        focus={isFocused}
        onClick={() =>
          mask || generateMask ? inputRef.current.inputElement.focus() : inputRef.current.focus()
        }>
        {label}
      </Label>

      <Input
        ref={inputRef}
        innerRef={inputRef}
        {...(mask || generateMask ? { as: MaskedInput } : {})}
        align={align}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...generateMask}
        {...props}
      />
    </BaseInput>
  );
};

TextInput.defaultProps = {
  maskConfig: {},
  floatLabel: false,
  debounce: 250,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  variant: 'default',
};

TextInput.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'numeric',
    'percent',
    'money',
    'decimal',
    'date',
    'timedate',
    'money',
    'cpf',
    'phone',
    'postal-code',
    'credit-card',
    'custom',
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};
