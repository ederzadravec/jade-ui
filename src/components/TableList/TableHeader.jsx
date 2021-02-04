import React from 'react';
import styled from 'styled-components';

import { Grid } from '../';

const Container = styled(Grid)`
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: ${({ theme, color }) => theme.palette[color].main};
  border-top-left-radius: ${({ theme }) => theme.components.tableList.borderRadius}px;
  border-top-right-radius: ${({ theme }) => theme.components.tableList.borderRadius}px;
  text-align: ${({ theme }) => theme.components.tableList.headerAlign};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.components.tableList.headerFontSize}px;
  font-weight: ${({ theme }) => theme.components.tableList.headerFontHeight};
  color: ${({ theme, color }) =>
    theme.components.tableList.headerColor || theme.palette[color].text};
`;

export const TableHeader = ({ config, color }) => {
  return (
    <Container container spacing={0} color={color}>
      {config.map(item => (
        <Grid key={JSON.stringify(item)} size={item.size} spacing={0} color={color}>
          <Label color={color}>{item.name}</Label>
        </Grid>
      ))}
    </Container>
  );
};
