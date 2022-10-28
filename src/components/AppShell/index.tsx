import React from 'react';
import Messagelist from '../Messagelist';
import MessagePanel from '../MessagePanel';
import SVGWrapper from '../SVGWrapper';

import * as S from './styles';

const user = {
  name: 'Andre Melo',
  avatar: 'https://i.pravatar.cc/300',
};

const menu = [
  {
    id: 1,
    title: 'Admin',
    icon: 'admin',
    url: '/admin',
  },
  {
    id: 2,
    title: 'Loja',
    icon: 'cart',
    url: '/shop',
  },
  {
    id: 3,
    title: 'Mensagens',
    icon: 'inbox',
    url: '/messages',
  },
  {
    id: 4,
    title: 'Comandos',
    icon: 'command',
    url: '/commands',
  },
];

const AppShell: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>
          <img src='https://vitejs.dev/logo-with-shadow.png' alt='logo' />
          <strong>SMARTSIM</strong>
        </S.Logo>
        <S.Avatar id='avatar'>
          <div>
            <p>Bem vindo,</p>
            <a href=''>{user.name}</a>
          </div>
          <img src={user.avatar} alt={user.name} />
        </S.Avatar>
      </S.Header>
      <S.Sidebar>
        <S.SidebarNav>
          {menu.map((item) => (
            <S.NavItem key={item.id} title={item.title}>
              <SVGWrapper iconName={item.icon} wrapperStyle='right-icon' />
              <p>{item.title}</p>
            </S.NavItem>
          ))}
        </S.SidebarNav>
        <S.SidebarFooter>
          <SVGWrapper iconName='predator' wrapperStyle='predator' />
          <strong>Predator Labs | {new Date().getFullYear()}</strong>
        </S.SidebarFooter>
      </S.Sidebar>
      <S.Main>
        <MessagePanel />
        <Messagelist />
      </S.Main>
    </S.Wrapper>
  );
};

export default AppShell;
