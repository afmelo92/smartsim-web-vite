import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Login: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          <S.Fields className='fields'>
            <h1>Faça seu login</h1>
            <Input placeholder='Insira seu e-mail' lefticon='mail' label='E-mail' />
            <Input type='password' placeholder='Sua senha secreta' lefticon='lock' label='Senha' />
            <Button>Entrar</Button>
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
