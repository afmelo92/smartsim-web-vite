import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '@/utils/validationSchemas';

import * as S from './styles';
import HookFormInput from '@/components/HookFormInput';

type Inputs = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data, e);
      setLoading(false);
      navigate('/login', {
        replace: true,
      });
    }, 2000);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Fields className='fields'>
            <h1>Esqueci minha senha</h1>
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
            <Button error={Object.keys(errors).length > 0} loading={loading} type='submit'>
              Enviar recuperação de senha
            </Button>
          </S.Fields>
          <S.Options>
            <Link to='/login'>Lembrei minha senha</Link>
            <Link to='/register'>Criar conta</Link>
          </S.Options>
        </S.Form>
        <S.Banner />
      </S.Container>
    </S.Wrapper>
  );
};

export default ForgotPassword;
