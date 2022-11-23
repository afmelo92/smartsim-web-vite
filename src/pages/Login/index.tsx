import React from 'react';
import Button from '@/components/Button';
import HookFormInput from '@/components/HookFormInput';
import { loginSchema } from '@/utils/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';
import toast from '@/components/Toast';
import { ErrorProps, login, LoginResponse } from '@/services/mutations';

import { useAuth } from '@/hooks/useAuth';
import { setStorageItem } from '@/utils/localStorage';

import * as S from './styles';

export type LoginInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { saveData } = useAuth();
  const navigate = useNavigate();
  const {
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const mutation = useMutation({
    mutationFn: async (loginData: LoginInputs): Promise<LoginResponse> => login(loginData),
    onError: (error: ErrorProps) => {
      setError('password', { type: 'value', message: error.message }, { shouldFocus: true });
      setError('email', { type: 'value', message: error.message }, { shouldFocus: true });
      toast({
        type: 'danger',
        text: `Oops! ${error.message}`,
      });
    },
    onSuccess: (data) => {
      const { token, user } = data;
      setStorageItem('token', token);
      saveData(user);
      navigate('/home', {
        replace: true,
      });
    },
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { email, password } = data;
    await mutation.mutateAsync({ email, password });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Fields className='fields'>
            <h1>Faça seu login</h1>
            <HookFormInput
              label='E-mail'
              name='email'
              id='email'
              placeholder='Insira seu e-mail cadastrado'
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
              placeholder='Insira sua senha secreta'
              lefticon='lock'
              control={control}
              errors={errors}
              autoComplete='new-password'
              loading={mutation.isLoading}
              type='password'
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
              Entrar
            </Button>
          </S.Fields>
          <S.Options>
            <Link to='/forgot-password'>Esqueci minha senha</Link>
            <Link to='/register'>Criar conta</Link>
          </S.Options>
        </S.Form>
        <S.Banner />
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
