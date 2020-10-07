import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

const RealButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;

  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 136px;
  height: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 4px;
  border: ${({ theme, color }) => `1px solid ${theme.palette[color].main}`};
  background: ${({ theme, color }) => theme.palette[color].main};
  overflow: hidden;

  ${RealButton}:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  ${({ variant, theme }) => {
    if (variant === 'outline')
      return `
        background-color: transparent;
      `;

    if (variant === 'transparent')
      return `
          background-color: transparent;
          border: none;
        `;

    if (variant === 'rounded')
      return `
        border-radius: 44px;
      `;
  }}
`;

const Label = styled.label`
  color: ${({ theme }) => theme.palette.colors.white};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  align-self: center;

  ${({ variant, color, theme }) => {
    if (variant === 'outline' || variant === 'transparent')
      return `
        color: ${theme.palette[color].main};
      `;
  }}
`;

const ButtonIcon = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.palette.colors.white};

  ${({ margin, theme }) => `margin-${margin}: ${theme.spacing.unit}px`};

  ${({ variant, color, theme }) => {
    if (variant === 'outline' || variant === 'transparent')
      return `
        color: ${theme.palette[color].main};
      `;
  }}
`;

export const Button = ({
  children,
  variant,
  color: colorProp,
  disabled,
  iconBefore,
  iconAfter,
  style,
  loading,
  ...props
}) => {
  const theme = React.useContext(ThemeContext);

  const color = disabled ? 'disabled' : colorProp;

  if (loading) {
    const spinnerCollor =
      variant === 'outline' || variant === 'transparent'
        ? theme.palette[color].main
        : theme.palette.colors.white;
    return (
      <Container variant={variant} color={color} style={style}>
        <BeatLoader size={8} margin={4} color={spinnerCollor} />
      </Container>
    );
  }

  return (
    <Container variant={variant} color={color} disabled={disabled} style={style}>
      {iconBefore && <ButtonIcon as={iconBefore} variant={variant} color={color} margin="right" />}

      <Label variant={variant} color={color}>
        {children}
      </Label>

      {iconAfter && <ButtonIcon as={iconAfter} variant={variant} color={color} margin="left" />}

      <RealButton {...props} />
    </Container>
  );
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'default',
  color: 'primary',
  disabled: false,
  loading: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline', 'transparent', 'rounded']),
  color: PropTypes.oneOf(['primary', 'error', 'alert', 'success']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  loading: PropTypes.bool,
};
