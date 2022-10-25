import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-rows: 64px auto;
  grid-template-columns: 300px auto;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 64px auto;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 0px auto;
  }
`;

export const Header = styled.header`
  grid-area: header;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  img {
    width: 48px;
    height: 48px;
  }

  #logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  #avatar {
    display: flex;
    align-items: center;
    gap: 8px;

    #text-section {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    p {
      font-size: 12px;
    }

    a {
      font-weight: bold;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary.main};

      :hover {
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }

    img {
      border-radius: 50%;
    }
  }
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #nav-header {
    padding: 16px 4px;
  }

  #nav-main {
    height: 100%;
  }

  #nav-footer {
    border-top: 1px solid ${({ theme }) => theme.colors.primary.lighter};
    padding: 16px 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const NavItem = styled.div`
  padding: 16px;
  cursor: pointer;
  font-size: 14px;

  :hover {
    border-left: 4px solid ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-areas: 'panel list';
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  background: ${({ theme }) => theme.colors.gray[900]};

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-areas:
      'panel'
      'list';
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-areas:
      'panel'
      'list';
    grid-template-columns: 1fr;
  }
`;
