import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { FaPlusSquare } from 'react-icons/fa';

import { BaseInput, hooks } from '../../';

const Label = styled.label`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0px;
  cursor: pointer;
  text-align: ${({ align }) => align};
  font-size: ${({ float }) => (float ? 10 : 12)}px;

  color: ${({ theme }) => theme.palette.text.dark};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  flex-wrap: wrap;
`;

const Icon = styled.span`
  width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.palette.text.dark};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const ContentImage = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 8px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 5px;

  margin-bottom: 4px;
`;

const Remove = styled.span`
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.error.main};

  &:hover {
    text-decoration: underline;
  }
`;

export const PhotoUpload = ({
  label,
  error,
  align,
  floatLabel,
  onChange,
  onBlur,
  onFocus,
  value: valueProp,
  maxFiles,
  ...props
}) => {
  const inputRef = React.useRef();
  const [{ init, value, isFocused }, setState] = hooks.useState({
    init: false,
    value: [],
    isFocused: false,
  });

  React.useEffect(() => {
    if (valueProp && valueProp !== value) {
      setState({ value: valueProp })
    }
  }, [valueProp])

  const handleOnChange = e => {
    const newValue = [...value, ...Object.values(e.target.files)];
    setState({ value: newValue, init: true });
    onChange(null, newValue);
  };

  const handleOnRemove = item => {
    const newValue = R.remove(item, 1, value);
    setState({ value: newValue, init: true });
    onChange(null, newValue);
  };

  const handleOnFocus = e => {
    setState({ isFocused: true, init: true });
    onFocus(null, value);
  };

  const handleOnBlur = e => {
    setState({ isFocused: false, init: true });
    onBlur(null, value);
  };

  const hasValue = !R.isNil(value) && !R.isEmpty(value);
  const floatingLabel = hasValue || floatLabel || isFocused;

  return (
    <BaseInput error={error} align={align}>
      <Label align={align} float={floatingLabel} focus={isFocused}>
        {label}
      </Label>

      <Content>
        {hasValue &&
          value.map((image, key) => (
            <ContentImage key={key}>
              <Image src={image && R.is(String, image)  ?  image : URL.createObjectURL(image)} />
              <Remove onClick={() => handleOnRemove(key)}>excluir</Remove>
            </ContentImage>
          ))}

        {maxFiles > value.length && (
          <Icon onClick={() => inputRef.current.click()} as={FaPlusSquare} />
        )}
      </Content>

      <input
        ref={inputRef}
        type="file"
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        hidden
        {...props}
      />
    </BaseInput>
  );
};

PhotoUpload.defaultProps = {
  align: 'left',
  floatLabel: false,
  multiple: false,
  maxFiles: 1,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
};
