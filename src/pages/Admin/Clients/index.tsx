import React, { useState, useMemo } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import SVGWrapper from '@/components/SVGWrapper';
import FilterInput from './components/FilterInput';

import * as S from './styles';
import UsersTable from './components/UsersTable';
import Pagination from './components/Pagination';
import DeleteModal from './components/DeleteModal';
import EditModal, { EditModalInputs } from './components/EditModal';
import { SubmitHandler } from 'react-hook-form';

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
  const [editModalLoading, setEditModalLoading] = useState(false);
  const [deleteModalLoading, setDeleteModalLoading] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>();
  const [columnVisibility, setColumnVisibility] = useState({});

  function handleOpenModal({ action, data }: { action: 'edit' | 'delete'; data: any }) {
    if (action === 'delete') {
      setDeleteModalIsOpen(true);

      setSelectedUser(() => defaultData.find((user) => (user?._id === data?.id ? user : null)));
    }

    if (action === 'edit') {
      setEditModalIsOpen(true);

      setSelectedUser(() => defaultData.find((user) => (user?._id === data?.id ? user : null)));
    }
  }

  function handleDelete() {
    setDeleteModalLoading(true);
    setTimeout(() => {
      console.log('deleted!!');
      console.log(selectedUser);
      setDeleteModalLoading(false);
      setDeleteModalIsOpen(false);
      setSelectedUser(null);
    }, 2000);
  }

  const handleEdit: SubmitHandler<EditModalInputs> = (data, e) => {
    setEditModalLoading(true);
    console.log(data, e);
    setTimeout(() => {
      console.log('edited!');
      console.log(selectedUser);
      setEditModalLoading(false);
      setEditModalIsOpen(false);
      setSelectedUser(null);
    }, 2000);
  };

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
              onClick={() =>
                handleOpenModal({
                  action: 'edit',
                  data: {
                    id: row.original._id,
                  },
                })
              }
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
                    id: row.original._id,
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
      // Implementar visibilidade dinamica baseado em viewport
      columnVisibility,
    },
    globalFilterFn: 'includesString',
    enableFilters: true,
    enableColumnFilters: true,
    enableGlobalFilter: true,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <S.Wrapper>
      <FilterInput
        value={globalFilter || ''}
        onChange={(value) => setGlobalFilter(String(value))}
        placeholder='Pesquise por qualquer dado...'
        lefticon='magnifier'
      />
      <UsersTable table={table} />
      <Pagination table={table} />
      <DeleteModal
        isOpen={deleteModalIsOpen}
        setIsOpen={setDeleteModalIsOpen}
        user={selectedUser}
        handleDelete={handleDelete}
        setDeleteModalIsOpen={setDeleteModalIsOpen}
        loading={deleteModalLoading}
      />
      <EditModal
        isOpen={editModalIsOpen}
        setIsOpen={setEditModalIsOpen}
        user={selectedUser}
        onSubmit={handleEdit}
        setEditModalIsOpen={setEditModalIsOpen}
        loading={editModalLoading}
      />
    </S.Wrapper>
  );
};

export default Clients;
