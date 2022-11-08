import React, { useState, useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import SVGWrapper from '@/components/SVGWrapper';
import FilterInput from './components/FilterInput';

import * as S from './styles';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

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

const defaultData: User[] = [
  {
    _id: '634b814406f98f9159c34e68',
    name: 'Fernando',
    email: 'fer@email.com',
    credits: '20',
    sms_refer: '0a5d1083-6066-43e8-b204-d7eb4c44c22b',
    sms_key: 'sms_key',
    createdAt: '2022-10-16T03:57:56.057Z',
    updatedAt: '2022-10-18T04:25:19.271Z',
    admin: false,
    avatar: null,
  },
  {
    _id: '634d5c2e4a0a95f5a411549e',
    name: 'Andre',
    email: 'andre@email.com',
    credits: '13',
    sms_refer: '471c5397-074b-4605-b59b-8294cae81f30',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:44:14.217Z',
    updatedAt: '2022-10-18T03:40:49.207Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5d94398c1c7a6e7d735e',
    name: 'Ninja',
    email: 'ninja@email.com',
    credits: '0',
    sms_refer: '288fb2d9-8c4d-43fd-99d1-f22565a861f6',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:50:12.657Z',
    updatedAt: '2022-10-17T13:50:12.657Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5dc78d1f5cd546c0943a',
    name: 'Jaq',
    email: 'jaq@email.com',
    credits: '0',
    sms_refer: '993bd113-3ff6-4e8b-a093-a0de96186f5a',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:51:03.115Z',
    updatedAt: '2022-10-17T13:51:03.115Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634b814406f98f9159c34e68',
    name: 'Fernando',
    email: 'fer@email.com',
    credits: '20',
    sms_refer: '0a5d1083-6066-43e8-b204-d7eb4c44c22b',
    sms_key: 'sms_key',
    createdAt: '2022-10-16T03:57:56.057Z',
    updatedAt: '2022-10-18T04:25:19.271Z',
    admin: false,
    avatar: null,
  },
  {
    _id: '634d5c2e4a0a95f5a411549e',
    name: 'Andre',
    email: 'andre@email.com',
    credits: '13',
    sms_refer: '471c5397-074b-4605-b59b-8294cae81f30',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:44:14.217Z',
    updatedAt: '2022-10-18T03:40:49.207Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5d94398c1c7a6e7d735e',
    name: 'Ninja',
    email: 'ninja@email.com',
    credits: '0',
    sms_refer: '288fb2d9-8c4d-43fd-99d1-f22565a861f6',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:50:12.657Z',
    updatedAt: '2022-10-17T13:50:12.657Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5dc78d1f5cd546c0943a',
    name: 'Jaq',
    email: 'jaq@email.com',
    credits: '0',
    sms_refer: '993bd113-3ff6-4e8b-a093-a0de96186f5a',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:51:03.115Z',
    updatedAt: '2022-10-17T13:51:03.115Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634b814406f98f9159c34e68',
    name: 'Fernando',
    email: 'fer@email.com',
    credits: '20',
    sms_refer: '0a5d1083-6066-43e8-b204-d7eb4c44c22b',
    sms_key: 'sms_key',
    createdAt: '2022-10-16T03:57:56.057Z',
    updatedAt: '2022-10-18T04:25:19.271Z',
    admin: false,
    avatar: null,
  },
  {
    _id: '634d5c2e4a0a95f5a411549e',
    name: 'Andre',
    email: 'andre@email.com',
    credits: '13',
    sms_refer: '471c5397-074b-4605-b59b-8294cae81f30',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:44:14.217Z',
    updatedAt: '2022-10-18T03:40:49.207Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5d94398c1c7a6e7d735e',
    name: 'Ninja',
    email: 'ninja@email.com',
    credits: '0',
    sms_refer: '288fb2d9-8c4d-43fd-99d1-f22565a861f6',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:50:12.657Z',
    updatedAt: '2022-10-17T13:50:12.657Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5dc78d1f5cd546c0943a',
    name: 'Jaq',
    email: 'jaq@email.com',
    credits: '0',
    sms_refer: '993bd113-3ff6-4e8b-a093-a0de96186f5a',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:51:03.115Z',
    updatedAt: '2022-10-17T13:51:03.115Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634b814406f98f9159c34e68',
    name: 'Fernando',
    email: 'fer@email.com',
    credits: '20',
    sms_refer: '0a5d1083-6066-43e8-b204-d7eb4c44c22b',
    sms_key: 'sms_key',
    createdAt: '2022-10-16T03:57:56.057Z',
    updatedAt: '2022-10-18T04:25:19.271Z',
    admin: false,
    avatar: null,
  },
  {
    _id: '634d5c2e4a0a95f5a411549e',
    name: 'Andre',
    email: 'andre@email.com',
    credits: '13',
    sms_refer: '471c5397-074b-4605-b59b-8294cae81f30',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:44:14.217Z',
    updatedAt: '2022-10-18T03:40:49.207Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5d94398c1c7a6e7d735e',
    name: 'Ninja',
    email: 'ninja@email.com',
    credits: '0',
    sms_refer: '288fb2d9-8c4d-43fd-99d1-f22565a861f6',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:50:12.657Z',
    updatedAt: '2022-10-17T13:50:12.657Z',
    admin: true,
    avatar: 'avatar_url',
  },
  {
    _id: '634d5dc78d1f5cd546c0943a',
    name: 'Jaq',
    email: 'jaq@email.com',
    credits: '0',
    sms_refer: '993bd113-3ff6-4e8b-a093-a0de96186f5a',
    sms_key: 'sms_key',
    createdAt: '2022-10-17T13:51:03.115Z',
    updatedAt: '2022-10-17T13:51:03.115Z',
    admin: true,
    avatar: 'avatar_url',
  },
];

const Clients: React.FC = () => {
  const [data] = useState<User[]>(() => [...defaultData]);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');

  function handleOpenModal({ action, data }: { action: 'edit' | 'delete'; data: any }) {
    if (action === 'delete') {
      setDeleteModalIsOpen(true);
      console.log({ data });
    }

    if (action === 'edit') {
      setEditModalIsOpen(true);
      console.log({ data });
    }
  }

  const columns = useMemo<ColumnDef<User, any>[]>(
    () => [
      {
        footer: (props) => props.column.id,
        accessorKey: 'name',
        accessorFn: (row) => row.name,
        header: 'Nome',
        cell: ({ getValue, row }) => <div title={row.original.name}>{getValue<string>()}</div>,
      },
      {
        footer: (props) => props.column.id,
        accessorKey: 'email',
        accessorFn: (row) => row.email,
        header: 'E-mail',
        cell: ({ getValue, row }) => <div title={row.original.email}>{getValue<string>()}</div>,
      },
      {
        footer: (props) => props.column.id,
        accessorKey: 'credits',
        accessorFn: (row) => row.credits,
        header: 'Créditos',
        cell: ({ getValue, row }) => (
          <div title={`${row.original.credits} créditos`}>{getValue<string>()}</div>
        ),
      },
      {
        footer: (props) => props.column.id,
        header: 'Opções',
        cell: ({ row }) => (
          <>
            <button
              className='edit-button'
              onClick={() => handleOpenModal({ action: 'edit', data: null })}
              type='button'
              title='Editar usuário'
            >
              <SVGWrapper iconName='edit' />
            </button>
            <button
              className='delete-button'
              onClick={() =>
                handleOpenModal({
                  action: 'delete',
                  data: {
                    name: row.original.name,
                  },
                })
              }
              type='button'
              title='Excluir usuário'
            >
              <SVGWrapper iconName='trash' />
            </button>
          </>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    debugAll: true,
    state: {
      globalFilter,
    },
    globalFilterFn: 'includesString',
    enableFilters: true,
    enableColumnFilters: true,
    enableGlobalFilter: true,
  });

  return (
    <S.Wrapper>
      <FilterInput
        value={globalFilter || ''}
        onChange={(value) => setGlobalFilter(String(value))}
        placeholder='Pesquise por qualquer dado...'
        lefticon='magnifier'
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
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
      </table>
      <S.Pagination className='flex items-center gap-2'>
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
      </S.Pagination>
      <Modal isOpen={deleteModalIsOpen} setIsOpen={setDeleteModalIsOpen} id='delete'>
        <S.DeleteModalContent>
          <h1>HELLO DELETE</h1>
        </S.DeleteModalContent>
      </Modal>
      <Modal isOpen={editModalIsOpen} setIsOpen={setEditModalIsOpen} id='edit'>
        <h1>HELLO EDIT MODAL</h1>
      </Modal>
    </S.Wrapper>
  );
};

export default Clients;
