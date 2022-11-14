import React, { useEffect } from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

import * as S from './styles';
import HookFormInput from '@/components/HookFormInput';
import { useForm, SubmitHandler } from 'react-hook-form';
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

type EditModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: SubmitHandler<EditModalInputs>;
  setEditModalIsOpen: (value: boolean) => void;
  user?: User | null;
  loading?: boolean;
};

export type EditModalInputs = {
  sms_key: string;
  credits: string;
};

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  setIsOpen,
  onSubmit,
  setEditModalIsOpen,
  user,
  loading = false,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<EditModalInputs>({
    defaultValues: {
      sms_key: '',
      credits: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} id='edit'>
      <S.Content>
        <h1>
          Editar usuário <strong>{user?.name}</strong>
        </h1>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <HookFormInput
            label='Chave'
            name='sms_key'
            id='sms_key'
            placeholder='Insira a chave SMS'
            lefticon='key'
            control={control}
            errors={errors}
            autoComplete='new-password'
            loading={loading}
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
            loading={loading}
            transform={{
              input: (value: string) => value,
              output: (e: React.BaseSyntheticEvent) => onlyNumbers(e.target.value),
            }}
          />

          <S.ButtonsContainer>
            <Button loading={loading} type='submit' id='edit'>
              Editar
            </Button>
            <Button disabled={loading} onClick={() => setEditModalIsOpen(false)} id='cancel'>
              Cancelar
            </Button>
          </S.ButtonsContainer>
        </S.Form>
      </S.Content>
    </Modal>
  );
};
export default EditModal;
