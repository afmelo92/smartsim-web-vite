import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

import * as S from './styles';
import HookFormInput from '@/components/HookFormInput';
import { useForm } from 'react-hook-form';
import { onlyNumbers } from '@/utils/filters';

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
  handleEdit: () => void;
  setEditModalIsOpen: (value: boolean) => void;
  user?: User | null;
};

type Inputs = {
  sms_key: string;
  credits: string;
};

const EditModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleEdit,
  setEditModalIsOpen,
  user,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    // watch,
    // setValue,
  } = useForm<Inputs>({
    defaultValues: {
      sms_key: '',
      credits: '',
      // search: '',
    },
    // resolver: yupResolver(sendMessageSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} id='edit'>
      <S.Content>
        <h1>
          Editar usuário <strong>{user?.name}</strong>
        </h1>

        <S.Form onSubmit={handleSubmit(handleEdit)}>
          <HookFormInput
            label='Chave'
            name='sms_key'
            id='sms_key'
            placeholder='Insira a chave SMS'
            lefticon='key'
            control={control}
            errors={errors}
            autoComplete='new-password'
            transform={{
              input: (value: string) => value,
              output: (e: React.BaseSyntheticEvent) => e.target.value,
            }}
          />
          <HookFormInput
            label='Créditos'
            name='credits'
            id='credits'
            placeholder='Atualize a quantidade de créditos'
            lefticon='credits'
            control={control}
            errors={errors}
            autoComplete='new-password'
            transform={{
              input: (value: string) => value,
              output: (e: React.BaseSyntheticEvent) => onlyNumbers(e.target.value),
            }}
          />
        </S.Form>
        <div>
          <Button onClick={() => handleEdit()} id='edit'>
            Editar
          </Button>
          <Button onClick={() => setEditModalIsOpen(false)} id='cancel'>
            Cancelar
          </Button>
        </div>
      </S.Content>
    </Modal>
  );
};
export default EditModal;
