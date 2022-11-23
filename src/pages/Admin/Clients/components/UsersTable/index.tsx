import SVGWrapper from '@/components/SVGWrapper';
import { Table, flexRender } from '@tanstack/react-table';

import React from 'react';

import * as S from './styles';

type User = {
  _id: string;
  name: string;
  email: string;
  credits: string;
  sms_refer: string;
  sms_key: string | null;
  createdAt: string;
  updatedAt: string;
  admin: boolean;
  avatar: string | null;
};

type FormattedUser = {
  id: string;
  email: string;
  credits: string;
  name: string;
};

type TableProps = {
  table: Table<FormattedUser>;
};

const UsersTable: React.FC<TableProps> = ({ table }) => {
  return (
    <>
      {table.getRowModel().rows.length <= 0 ? (
        <S.EmptyList>
          <h1>Ooops!</h1>
          <SVGWrapper iconName='empty' wrapperStyle='empty-list' />
          <h2>Parece que não há itens na lista.</h2>
        </S.EmptyList>
      ) : (
        <S.Table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </S.Table>
      )}
    </>
  );
};

export default UsersTable;
