import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Register: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          <S.Fields className='fields'>
            <h1>Crie sua conta</h1>
            <Input placeholder='Insira seu e-mail' lefticon='mail' label='E-mail' />
            <Input placeholder='Confirme o e-mail' lefticon='mail' label='Confirmação de e-mail' />
            <Input type='password' placeholder='Sua senha secreta' lefticon='lock' label='Senha' />
            <Input
              type='password'
              placeholder='Confirma a senha'
              lefticon='lock'
              label='Confirmação de senha'
            />
            <Button>Criar conta</Button>
          </S.Fields>
          <S.Options>
            <Link to='/login'>Já tenho uma conta</Link>
          </S.Options>
        </S.Form>
        <S.Banner />
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
