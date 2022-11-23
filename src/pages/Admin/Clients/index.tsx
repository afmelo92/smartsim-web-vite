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
import UsersTable from './components/UsersTable';
import Pagination from './components/Pagination';
import DeleteModal from './components/DeleteModal';
import EditModal, { EditModalInputs } from './components/EditModal';
import { SubmitHandler } from 'react-hook-form';
import toast from '@/components/Toast';

import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchAllUsers, FetchAllUsersResponse } from '@/services/queries';
import {
  deleteUser,
  DeleteUserData,
  editUser,
  EditUserData,
  EditUserResponse,
  ErrorProps,
} from '@/services/mutations';
import Spinner from '@/components/Spinner';

import * as S from './styles';

type User = {
  _id: string;
  name: string;
  email: string;
  credits: number;
  sms_refer: string;
  sms_key: string | null;
  createdAt: string;
  updatedAt: string;
  admin: boolean;
  avatar: string | null;
  __v: number;
};

type FormattedUser = {
  id: string;
  email: string;
  credits: string;
  name: string;
};

type OpenModalProps = {
  action: 'edit' | 'delete' | '';
  isOpen: boolean;
  data: {
    user: FormattedUser | null;
  };
};

const Clients: React.FC = () => {
  const [users, setUsers] = useState<FormattedUser[]>([]);
  const [opModal, setOpModal] = useState<OpenModalProps>({
    action: '',
    isOpen: false,
    data: { user: null },
  });
  const [globalFilter, setGlobalFilter] = useState('');
  // const [columnVisibility, setColumnVisibility] = useState({});

  const query = useQuery({
    queryKey: ['getUsers'],
    queryFn: async (): Promise<FetchAllUsersResponse> => fetchAllUsers(),
    onSuccess: (data) => {
      setUsers(
        data.map((user: User) => ({
          id: user._id,
          email: user.email,
          credits: String(user.credits),
          name: user.name,
        }))
      );
    },
    refetchOnWindowFocus: false,
    refetchInterval: 5000000,
  });

  const editUserMutation = useMutation({
    mutationFn: async (data: EditUserData): Promise<EditUserResponse> => editUser(data),
    onError: (error: ErrorProps) => {
      toast({
        type: 'danger',
        text: `Oops! ${error.message}`,
      });
    },
    onSuccess: (_, variables) => {
      setUsers((prev) =>
        prev.map((user: FormattedUser) => {
          if (user.id === opModal?.data.user?.id) {
            return {
              ...user,
              credits: variables.credits,
            };
          }
          return user;
        })
      );
      toast({
        type: 'success',
        text: `Usuário editado com sucesso!`,
      });
    },
    onSettled: () => {
      setOpModal({
        action: '',
        isOpen: false,
        data: {
          user: null,
        },
      });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: async (data: DeleteUserData): Promise<unknown> => deleteUser(data),
    onError: (error: ErrorProps) => {
      toast({
        type: 'danger',
        text: `Oops! ${error.message}`,
      });
    },
    onSuccess: () => {
      toast({
        type: 'success',
        text: `Usuário excluído com sucesso!`,
      });

      setUsers((prev) => prev.filter((user: FormattedUser) => user.id !== opModal?.data.user?.id));
    },
    onSettled: () => {
      setOpModal({
        action: '',
        isOpen: false,
        data: {
          user: null,
        },
      });
    },
  });

  const handleDelete = async () => {
    await deleteUserMutation.mutateAsync({ user_id: opModal?.data?.user?.id });
  };

  const handleEdit: SubmitHandler<EditModalInputs> = async (data) => {
    const { sms_key, credits } = data;

    await editUserMutation.mutateAsync({ sms_key, credits, user_id: opModal?.data?.user?.id });
  };

  function handleCloseModal() {
    setOpModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }

  const columns = useMemo<ColumnDef<FormattedUser>[]>(
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
                setOpModal({
                  action: 'edit',
                  isOpen: true,
                  data: {
                    user: row.original,
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
                setOpModal({
                  action: 'delete',
                  isOpen: true,
                  data: {
                    user: row.original,
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
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    // debugAll: true,
    state: {
      globalFilter,
      // Implementar visibilidade dinamica baseado em viewport
      // columnVisibility,
    },
    globalFilterFn: 'includesString',
    enableFilters: true,
    enableColumnFilters: true,
    enableGlobalFilter: true,
    // onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <S.Wrapper>
      <FilterInput
        value={globalFilter || ''}
        onChange={(value) => setGlobalFilter(String(value))}
        placeholder='Pesquise por qualquer dado...'
        lefticon='magnifier'
      />
      {query.isLoading ? <Spinner /> : <UsersTable table={table} />}
      {!query.isLoading && <Pagination table={table} />}
      <DeleteModal
        isOpen={opModal.action === 'delete' && opModal.isOpen}
        setIsOpen={() =>
          setOpModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
        user={opModal.data.user}
        onSubmit={handleDelete}
        onClose={handleCloseModal}
        loading={deleteUserMutation.isLoading}
      />
      <EditModal
        isOpen={opModal.action === 'edit' && opModal.isOpen}
        setIsOpen={() =>
          setOpModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
        user={opModal.data.user}
        onSubmit={handleEdit}
        onClose={handleCloseModal}
        loading={editUserMutation.isLoading}
      />
    </S.Wrapper>
  );
};

export default Clients;
