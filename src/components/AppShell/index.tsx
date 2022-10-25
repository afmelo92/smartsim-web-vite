import React from 'react';
import Messagelist from '../Messagelist';
import MessagePanel from '../MessagePanel';

import * as S from './styles';

const AppShell: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div id='logo'>
          <img src='https://vitejs.dev/logo-with-shadow.png' alt='logo' />
          <strong>SMARTSIM</strong>
        </div>
        <div id='avatar'>
          <div id='text-section'>
            <p>Bem vindo,</p>
            <a href=''>Andre Melo</a>
          </div>
          <img src='https://i.pravatar.cc/300' alt='user' />
        </div>
      </S.Header>
      <S.Sidebar>
        <div id='nav-main'>
          <S.NavItem>
            <p>Admin</p>
          </S.NavItem>
          <S.NavItem>
            <p>Shop</p>
          </S.NavItem>
          <S.NavItem>
            <p>Messages</p>
          </S.NavItem>
          <S.NavItem>
            <p>Commands</p>
          </S.NavItem>
        </div>
        <div id='nav-footer'>
          <strong>Predator Labs | {new Date().getFullYear()}</strong>
        </div>
      </S.Sidebar>
      <S.Main>
        <MessagePanel />
        <Messagelist />
      </S.Main>
    </S.Wrapper>
  );
};

export default AppShell;
