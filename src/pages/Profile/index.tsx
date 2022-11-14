import React, { useState } from 'react';
import Button from '@/components/Button';
import toast from '@/components/Toast';
import { updateUserSchema } from '@/utils/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import HookFormInput from '@/components/HookFormInput';
import * as S from './styles';

type Inputs = {
  name: string;
  email: string;
  new_password: string;
  confirm_password: string;
};

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: 'Andre Melo',
      email: 'andre.fabian.melo@gmail.com',
      new_password: '',
      confirm_password: '',
    },
    resolver: yupResolver(updateUserSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data, e);
      setLoading(false);
      toast({
        type: 'success',
        text: 'Perfil atualizado com sucesso!',
      });
    }, 2000);
  };
  return (
    <S.Wrapper>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <img src='https://i.pravatar.cc/300' alt='user' />
        <HookFormInput
          label='Nome'
          name='name'
          id='name'
          placeholder='Insira seu nome'
          lefticon='user'
          control={control}
          errors={errors}
          autoComplete='new-password'
          loading={loading}
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
          loading={loading}
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
          loading={loading}
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
          loading={loading}
          transform={{
            input: (value: string) => value,
            output: (e: React.BaseSyntheticEvent) => String(e.target.value),
          }}
        />
        <Button
          id='submit-button'
          error={Object.keys(errors).length > 0}
          loading={loading}
          type='submit'
        >
          Atualizar perfil{' '}
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
