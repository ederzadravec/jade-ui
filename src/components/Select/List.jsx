import React from 'react';
import styled from 'styled-components';

const Mask = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 100;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  max-height: 250px;

  top: 47px;
  left: 0;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background: #fff;
  border: 1px solid #bbb;
  z-index: 1001;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  flex-direction: column;

  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Item = styled.span`
  width: 100%;
  padding: 16px;
  cursor: pointer;

  background: ${({ active, theme }) => (active ? theme.palette.colors.grey[100] : 'none')};

  &:hover {
    background: ${({ theme }) => theme.palette.colors.grey[50]};
  }
`;

export const List = ({ visible, data, value, onClose, onChange }) => {
  const handleSelect = item => {
    onChange(item);
  };

  return (
    <>
      <Mask visible={visible} onClick={onClose} />

      <Container visible={visible}>
        <Content>
          {data.map((item, key) => (
            <Item key={key} active={value.includes(item.value)} onClick={() => handleSelect(item)}>
              {item.label}
            </Item>
          ))}
        </Content>
      </Container>
    </>
  );
};
