import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import SVGWrapper from '@/components/SVGWrapper';
import config from '@/config';
import defaultAvatar from '@/assets/images/avatar.jpeg';
import * as S from './styles';
import { useAuth } from '@/hooks/useAuth';

const AppShell: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>
          <img src='https://vitejs.dev/logo-with-shadow.png' alt='logo' />
          <strong>SMARTSIM</strong>
        </S.Logo>
        <S.RightSection>
          <S.Credits onClick={() => navigate('/shop')}>
            <p>{user?.credits ?? 0} créditos</p>
          </S.Credits>
          <S.Avatar id='avatar'>
            <div>
              <p>Bem vindo,</p>
              <Link to='/profile'>{user?.name}</Link>
            </div>
            <img src={user?.avatar || defaultAvatar} alt={user?.name || 'user avatar'} />
          </S.Avatar>
        </S.RightSection>
      </S.Header>
      <S.Sidebar>
        <S.SidebarNav>
          {config.menu
            .filter((menuItem) => (user?.admin ? menuItem : !menuItem.admin))
            .map(
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
