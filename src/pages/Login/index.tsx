import React, { useState } from 'react';
import Button from '@/components/Button';
import HookFormInput from '@/components/HookFormInput';
import { loginSchema } from '@/utils/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import * as S from './styles';

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data, e);
      setLoading(false);
      navigate('/home', {
        replace: true,
      });
    }, 2000);
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
              loading={loading}
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
              loading={loading}
              type='password'
              transform={{
                input: (value: string) => value,
                output: (e: React.BaseSyntheticEvent) => String(e.target.value),
              }}
            />
            <Button error={Object.keys(errors).length > 0} loading={loading} type='submit'>
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
