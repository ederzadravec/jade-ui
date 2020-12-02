import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

import { Grid } from '../';

const Content = styled(Grid)`
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: rgba(0, 0, 0, 0.02);

  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.06);
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Value = styled.label`
  font-size: 12px;
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
