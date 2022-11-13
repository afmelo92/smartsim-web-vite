import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

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

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
  setDeleteModalIsOpen: (value: boolean) => void;
  user?: User | null;
  loading?: boolean;
};

const DeleteModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleDelete,
  setDeleteModalIsOpen,
  user,
  loading = false,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} id='delete'>
      <S.Content>
        <h1>Atenção!</h1>
        <h2>
          Tem certeza que deseja excluir o usuário <strong>{user?.name}</strong> ?
        </h2>
        <div>
          <Button loading={loading} onClick={() => handleDelete()} id='delete'>
            Excluir
          </Button>
          <Button onClick={() => setDeleteModalIsOpen(false)} id='cancel'>
            Cancelar
          </Button>
        </div>
      </S.Content>
    </Modal>
  );
};
export default DeleteModal;
