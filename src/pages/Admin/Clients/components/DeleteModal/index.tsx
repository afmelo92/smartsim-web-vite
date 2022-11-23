import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

import * as S from './styles';
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

type FormattedUser = {
  id: string;
  email: string;
  credits: string;
  name: string;
};

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  onClose: () => void;
  user?: FormattedUser | null;
  loading?: boolean;
};

const DeleteModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  onSubmit,
  onClose,
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
          <Button loading={loading} onClick={onSubmit} id='delete'>
            Excluir
          </Button>
          <Button disabled={loading} onClick={onClose} id='cancel'>
            Cancelar
          </Button>
        </div>
      </S.Content>
    </Modal>
  );
};
export default DeleteModal;
