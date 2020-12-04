import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

import { Grid } from '../';

const Container = styled.div`
  border-bottom-right-radius: ${({ theme }) => theme.components.tableList.borderRadius}px;
  border-bottom-left-radius: ${({ theme }) => theme.components.tableList.borderRadius}px;
  overflow: hidden;
`;

const Content = styled(Grid)`
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: ${({ theme }) => theme.components.tableList.itemBackground};
  text-align: ${({ theme }) => theme.components.tableList.itemAlign};

  &:nth-child(even) {
    background: ${({ theme }) => theme.components.tableList.itemBackgroundEven};
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.components.tableList.itemBackgroundHover};
  }
`;

const Value = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.components.tableList.itemFontSize}px;
  color: ${({ theme }) => theme.components.tableList.itemColor};
  text-align: ${({ align }) => align || 'unset'};
`;

export const TableItem = ({ config, data, onSelect }) => {
  const getValue = (value, { dataPath }) => {
    const type = {
      String: () => R.path(dataPath.split('.'), value),
      Array: () => R.path(dataPath, value),
      Function: () => dataPath(value),
    };

    return type[R.type(dataPath)]();
  };

  const handleColumnClick = (value, item) => e => {
    if (!item.onClick) return;

    e.stopPropagation();
    item.onClick(value);
  };

  return data.map(value => (
    <Content key={JSON.stringify(value)} container onClick={() => onSelect(value)} spacing={0}>
      {config.map(item => (
        <Grid
          key={JSON.stringify(item)}
          size={item.size}
          onClick={handleColumnClick(value, item)}
          spacing={0}>
          <Value>{getValue(value, item)}</Value>
        </Grid>
      ))}
    </Content>
  ));
};
