import React from 'react';
import Button from '@/components/Button';

import * as S from './styles';
import { Table } from '@tanstack/react-table';

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

type PaginationProps = {
  table: Table<User>;
};

const Pagination: React.FC<PaginationProps> = ({ table }) => {
  return (
    <S.Wrapper className='flex items-center gap-2'>
      <S.ArrowButtons>
        <Button
          id='arrow'
          size='sm'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </Button>
        <Button
          id='arrow'
          size='sm'
          className='border rounded p-1'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </Button>
        <Button
          id='arrow'
          size='sm'
          className='border rounded p-1'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </Button>
        <Button
          id='arrow'
          size='sm'
          className='border rounded p-1'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </Button>
      </S.ArrowButtons>
      <S.PagesSection>
        <div className='page-desc'>
          <strong>
            Pág. {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
          </strong>
        </div>
        <div className='page-goto'>
          <p>Ir para página: </p>
          <input
            type='number'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className='border p-1 rounded w-16'
          />
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </S.PagesSection>
    </S.Wrapper>
  );
};

export default Pagination;
