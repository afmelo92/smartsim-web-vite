import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SVGWrapper from '@/components/SVGWrapper';
import config from '@/config';

import * as S from './styles';

const user = {
  name: 'Andre Melo',
  avatar: 'https://i.pravatar.cc/300',
};

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
            <Link to='/profile'>{user.name}</Link>
          </div>
          <img src={user.avatar} alt={user.name} />
        </S.Avatar>
      </S.Header>
      <S.Sidebar>
        <S.SidebarNav>
          {config.menu.map(
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
