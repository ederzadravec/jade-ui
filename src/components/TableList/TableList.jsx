import React from 'react';
import styled from 'styled-components';

import { TableHeader } from './TableHeader';
import { TableItem } from './TableItem';

const NoData = styled.div`
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: rgba(0, 0, 0, 0.02);
  font-size: 12px;
  text-align: center;
`;

export const TableList = ({ config, data, onSelect }) => {
  return (
    <>
      <TableHeader config={config} />

      <TableItem config={config} data={data} onSelect={onSelect} />

      {data?.length <= 0 && <NoData>Sem resultados</NoData>}
    </>
  );
};

TableList.defaultProps = {
  onSelect: () => {},
};
