import React from 'react';
import { Outlet } from 'react-router-dom';
import SVGWrapper from '@/components/SVGWrapper';

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
    active: true,
    admin: true,
  },
  {
    id: 2,
    title: 'Home',
    icon: 'home',
    url: '/home',
    active: true,
    admin: false,
  },
  {
    id: 3,
    title: 'Loja',
    icon: 'cart',
    url: '/shop',
    active: true,
    admin: false,
  },
  {
    id: 4,
    title: 'Mensagens',
    icon: 'inbox',
    url: '/messages',
    active: false,
    admin: false,
  },
  {
    id: 5,
    title: 'Comandos',
    icon: 'command',
    url: '/commands',
    active: false,
    admin: false,
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
          {menu.map(
            (item) =>
              item.active && (
                <S.NavItem key={item.id} title={item.title} to={`${item.url}`}>
                  <SVGWrapper iconName={item.icon} wrapperStyle='right-icon' />
                  <p>{item.title}</p>
                </S.NavItem>
              )
          )}
        </S.SidebarNav>
        <S.SidebarFooter>
          <SVGWrapper iconName='predator' wrapperStyle='predator' />
          <strong>Predator Labs | {new Date().getFullYear()}</strong>
        </S.SidebarFooter>
      </S.Sidebar>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Wrapper>
  );
};

export default AppShell;
