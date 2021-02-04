import React from 'react';
import styled from 'styled-components';

import { TableHeader } from './TableHeader';
import { TableItem } from './TableItem';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: ${({ theme }) => theme.components.tableList.border};
  border-radius: ${({ theme }) => theme.components.tableList.borderRadius}px;
`;

const NoData = styled.div`
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: rgba(0, 0, 0, 0.02);
  font-size: 12px;
  text-align: center;
`;

export const TableList = ({ config, data, onSelect, color }) => {
  return (
    <Container>
      <TableHeader config={config} color={color} />

      <TableItem config={config} data={data} onSelect={onSelect} />

      {data?.length <= 0 && <NoData>Sem resultados</NoData>}
    </Container>
  );
};

TableList.defaultProps = {
  onSelect: () => {},
  color: 'primary',
};
