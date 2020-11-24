import React from 'react';
import styled from 'styled-components';

const Mask = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1000;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  transition: max-height 0.4s;

  top: 48px;
  left: 0;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background: #fff;
  border: ${({ visible }) => (visible ? 1 : 0)}px solid #bbb;
  z-index: 1001;

  max-height: ${({ visible, theme }) => (visible ? theme.components.select.listHeight : 0)}px;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

const Item = styled.span`
  width: 100%;
  padding: ${({ theme }) => theme.components.select.itemPadding}px;
  font-size: ${({ theme }) => theme.components.select.itemFontSize}px;
  cursor: pointer;

  color: ${({ active, theme }) => (active ? theme.palette.primary.main : 'unset')};
  font-weight: ${({ active, theme }) => (active ? 'bold' : 'unset')};
  background: ${({ active, theme }) => (active ? theme.components.select.itemBackgroundActive : 'none')};

  &:hover {
    background: ${({ theme }) => theme.components.select.itemBackgroundHover};
  }
`;

export const List = ({ visible, data, value, onClose, onChange }) => {
  const listRef = React.useRef();
  const handleSelect = item => {
    onChange(item);
  };

  React.useEffect(() => {
    if (!visible) return;

    setTimeout(() => listRef.current.scrollIntoView(), 500);
  }, [visible]);

  return (
    <>
      <Mask visible={visible} onClick={onClose} />

      <Container ref={listRef} visible={visible}>
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
