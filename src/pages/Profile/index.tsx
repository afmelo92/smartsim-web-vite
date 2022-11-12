import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';

import * as S from './styles';

const Profile: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <img src='https://i.pravatar.cc/300' alt='user' />
        <Input label='Nome' placeholder='Insira seu nome' lefticon='user' />
        <Input label='E-mail' placeholder='Insira seu e-mail' lefticon='mail' />
        <span />
        <Input label='Senha atual' placeholder='Insira sua senha atual' lefticon='lock' />
        <Input label='Nova senha' placeholder='Insira sua nova senha' lefticon='lock' />
        <Input label='Confirmação de senha' placeholder='Confirme sua nova senha' lefticon='lock' />
        <Button id='submit-button'>Atualizar perfil</Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
