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

type TableProps = {
  table: Table<User>;
};

const UsersTable: React.FC<TableProps> = ({ table }) => {
  return (
    <S.Table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              if (window.innerWidth <= 500) {
                header.column.getToggleVisibilityHandler();
              }
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
  );
};

export default UsersTable;
