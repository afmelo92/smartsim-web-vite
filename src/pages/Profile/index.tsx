import React from 'react';
import Button from '@/components/Button';
import toast from '@/components/Toast';
import { updateUserSchema } from '@/utils/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import HookFormInput from '@/components/HookFormInput';
import { useNavigate } from 'react-router-dom';
import avatar from '@/assets/images/avatar.jpeg';

import { useMutation } from '@tanstack/react-query';
import {
  editProfile,
  EditProfileData,
  EditProfileResponse,
  ErrorProps,
} from '@/services/mutations';
import { useAuth } from '@/hooks/useAuth';
import * as S from './styles';

type Inputs = {
  name: string;
  email: string;
  new_password: string;
  confirm_password: string;
};

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, clearData, saveData } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      new_password: '',
      confirm_password: '',
    },
    resolver: yupResolver(updateUserSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const editProfileMutation = useMutation({
    mutationFn: async (data: EditProfileData): Promise<EditProfileResponse> => editProfile(data),
    onError: (error: ErrorProps) => {
      toast({
        type: 'danger',
        text: `Oops! ${error.message}`,
      });
    },
    onSuccess: (data) => {
      const { user: responseUser } = data;

      saveData({
        id: responseUser._id,
        name: responseUser.name,
        email: responseUser.email,
        admin: responseUser.admin,
        credits: responseUser.credits,
        avatar: responseUser.avatar,
      });

      reset({
        new_password: '',
        confirm_password: '',
        email: responseUser.email,
        name: responseUser.name,
      });

      toast({
        type: 'success',
        text: `Usuário editado com sucesso!`,
      });
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, new_password, confirm_password } = data;

    if (user) {
      await editProfileMutation.mutateAsync({
        name,
        email,
        new_password,
        confirm_password,
        user_id: user.id,
      });
    }
  };

  function handleLogout() {
    clearData();
    return navigate('/login');
  }
  return (
    <S.Wrapper>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <img src={avatar} alt='user' />
        <HookFormInput
          label='Nome'
          name='name'
          id='name'
          placeholder='Insira seu nome'
          lefticon='user'
          control={control}
          errors={errors}
          autoComplete='new-password'
          loading={editProfileMutation.isLoading}
          transform={{
            input: (value: string) => value,
            output: (e: React.BaseSyntheticEvent) => String(e.target.value),
          }}
        />
        <HookFormInput
          label='E-mail'
          name='email'
          id='email'
          placeholder='Insira seu e-mail'
          lefticon='mail'
          control={control}
          errors={errors}
          autoComplete='new-password'
          loading={editProfileMutation.isLoading}
          transform={{
            input: (value: string) => value,
            output: (e: React.BaseSyntheticEvent) => String(e.target.value),
          }}
        />
        <span />
        <HookFormInput
          label='Nova Senha'
          name='new_password'
          id='new_password'
          placeholder='Sua senha secreta'
          lefticon='lock'
          control={control}
          errors={errors}
          autoComplete='new-password'
          loading={editProfileMutation.isLoading}
          transform={{
            input: (value: string) => value,
            output: (e: React.BaseSyntheticEvent) => String(e.target.value),
          }}
        />
        <HookFormInput
          label='Confirmação de senha'
          name='confirm_password'
          id='confirm_password'
          placeholder='Confirma a senha'
          lefticon='lock'
          control={control}
          errors={errors}
          autoComplete='new-password'
          loading={editProfileMutation.isLoading}
          transform={{
            input: (value: string) => value,
            output: (e: React.BaseSyntheticEvent) => String(e.target.value),
          }}
        />

        <S.ButtonsContainer>
          <Button
            id='submit-button'
            error={Object.keys(errors).length > 0}
            loading={editProfileMutation.isLoading}
            type='submit'
          >
            Atualizar perfil{' '}
          </Button>
          <Button id='logout-button' type='button' error={true} onClick={handleLogout}>
            Logout
          </Button>
        </S.ButtonsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
