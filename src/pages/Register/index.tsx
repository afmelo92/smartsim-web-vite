import React from 'react';
import Button from '@/components/Button';
import HookFormInput from '@/components/HookFormInput';
import toast from '@/components/Toast';
import { registerSchema } from '@/utils/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ErrorProps, registerUser, RegisterUserResponse } from '@/services/mutations';

import * as S from './styles';

export type RegisterInputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (newUser: RegisterInputs): Promise<RegisterUserResponse> =>
      registerUser(newUser),
    onError: (error: ErrorProps) => {
      toast({
        type: 'danger',
        text: `Oops! ${error.message}`,
      });
    },
    onSuccess: () => {
      toast({
        type: 'success',
        text: 'Conta criada com sucesso!',
      });
      navigate('/login', {
        replace: true,
      });
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    const { name, email, password, confirm_password } = data;

    await mutation.mutateAsync({ name, email, password, confirm_password });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Fields className='fields'>
            <h1>Crie sua conta</h1>
            <HookFormInput
              label='Nome'
              name='name'
              id='name'
              placeholder='Insira seu nome'
              lefticon='user'
              control={control}
              errors={errors}
              autoComplete='new-password'
              loading={mutation.isLoading}
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
              loading={mutation.isLoading}
              transform={{
                input: (value: string) => value,
                output: (e: React.BaseSyntheticEvent) => String(e.target.value),
              }}
            />
            <HookFormInput
              label='Senha'
              name='password'
              id='password'
              placeholder='Sua senha secreta'
              lefticon='lock'
              control={control}
              errors={errors}
              autoComplete='new-password'
              loading={mutation.isLoading}
              transform={{
                input: (value: string) => value,
                output: (e: React.BaseSyntheticEvent) => String(e.target.value),
              }}
            />
            <HookFormInput
              label='Confirma????o de senha'
              name='confirm_password'
              id='confirm_password'
              placeholder='Confirma a senha'
              lefticon='lock'
              control={control}
              errors={errors}
              autoComplete='new-password'
              loading={mutation.isLoading}
              transform={{
                input: (value: string) => value,
                output: (e: React.BaseSyntheticEvent) => String(e.target.value),
              }}
            />
            <Button
              error={Object.keys(errors).length > 0}
              loading={mutation.isLoading}
              type='submit'
            >
              Criar conta
            </Button>
          </S.Fields>
          <S.Options>
            <Link to='/login'>J?? tenho uma conta</Link>
          </S.Options>
        </S.Form>
        <S.Banner />
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
