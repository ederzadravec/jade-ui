import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;

  border: ${({ theme, color }) => `1px solid ${theme.palette[color].main}`};
  background: ${({ theme, color }) => theme.palette[color].main};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  border-width: ${({ theme }) => theme.components.button.borderWidth};
  height: ${({ theme }) => theme.components.button.height};
  min-width: ${({ theme }) => theme.components.button.width};
  width: 100%;
  max-width: ${({ theme }) => theme.components.button.maxWidth};
  padding: ${({ theme }) => theme.components.button.padding};

  transition: 0.4s;

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
  }}

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme, color }) => theme.palette[color].dark};

    ${({ variant, theme }) => {
      if (['outline', 'transparent'].includes(variant)) {
        return `
          background-color: rgba(0, 0, 0, 0.05);
        `;
      }
    }}
  }
`;

const Label = styled.label`
  color: ${({ theme, color }) => theme.palette[color].text};
  font-weight: bold;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  align-self: center;
  padding: ${({ theme }) => theme.components.button.labelPadding};
  font-size: ${({ theme }) => theme.components.button.labelFontSize};
  font-family: ${({ theme }) => theme.components.button.fontFamily};

  ${({ variant, color, theme }) => {
    if (variant === 'outline' || variant === 'transparent')
      return `
        color: ${theme.palette[color].main};
      `;
  }}
`;

const ButtonIcon = styled.span`
  font-size: 20px;
  color: ${({ theme, colorIcon }) => theme.palette[colorIcon].text};

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
  onClick,
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
      <Container variant={variant} color={color} {...props}>
        <BeatLoader size={8} margin={4} color={spinnerCollor} />
      </Container>
    );
  }

  return (
    <Container variant={variant} color={color} disabled={disabled} onClick={onClick} {...props}>
      {iconBefore && <ButtonIcon as={iconBefore} variant={variant} colorIcon={color} margin="right" />}

      <Label variant={variant} color={color}>
        {children}
      </Label>

      {iconAfter && <ButtonIcon as={iconAfter} variant={variant} colorIcon={color} margin="left" />}
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
  variant: PropTypes.oneOf(['default', 'outline', 'transparent']),
  color: PropTypes.oneOf(['primary', 'error', 'alert', 'success']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  loading: PropTypes.bool,
};
