import React from 'react';
import styled from 'styled-components';

import { Grid } from '../';

const Container = styled(Grid)`
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  font-weight: bold;
`;

const Label = styled.label`
  font-size: 14px;
`;

export const TableHeader = ({ config }) => {
  return (
    <Container container>
      {config.map((item) => (
        <Grid key={JSON.stringify(item)} size={item.size} spacing={0}>
          <Label>{item.name}</Label>
        </Grid>
      ))}
    </Container>
  );
};
