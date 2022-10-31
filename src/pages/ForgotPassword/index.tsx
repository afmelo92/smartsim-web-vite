import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          <S.Fields className='fields'>
            <h1>Esqueci minha senha</h1>
            <Input placeholder='Insira o e-mail cadastrado' lefticon='mail' label='E-mail' />
            <Button>Enviar recuperação de senha</Button>
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
