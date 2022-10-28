import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-rows: 64px auto;
  grid-template-columns: 200px auto;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 64px auto;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 0px auto;
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: 767px) {
    img {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};

      :hover {
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }

  img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
`;

// export const Sidebar = styled.div`
//   grid-area: sidebar;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   max-height: 100vh;

//   #nav-header {
//     padding: 16px 4px;
//   }
// `;

export const Sidebar = styled.div`
  grid-area: sidebar;
  position: relative;
`;

export const SidebarNav = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavItem = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 48px;
    cursor: pointer;
    padding: 16px;
    font-size: 0.9rem;
    display: flex;
    gap: 8px;
    transition: 0.2s ease;

    :hover {
      border-left: 4px solid ${theme.colors.primary.main};
      background: ${theme.colors.gray[900]};
    }

    svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: ${theme.colors.font};
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      align-items: center;
      justify-content: center;

      p {
        display: none;
      }
    }

    @media screen and (max-width: 767px) {
      display: none;
    }
  `}
`;

// export const NavItem = styled.div`
//   ${({ theme }) => css`
//     padding: 16px;
//     cursor: pointer;
//     font-size: 14px;
//     transition: 0.2s ease;
//     display: flex;
//     gap: 8px;

//     svg {
//       width: 16px;
//       height: 16px;
//       fill: none;
//       stroke: ${theme.colors.font};
//     }

//     :hover {
//       border-left: 4px solid ${theme.colors.primary.main};
//       background: ${theme.colors.gray[900]};
//     }

//     @media screen and (min-width: 768px) and (max-width: 1023px) {
//       align-items: center;
//       justify-content: center;
//       p {
//         display: none;
//       }
//     }
//   `}
// `;

export const SidebarFooter = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.main};
  position: absolute;
  bottom: 0;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    strong {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

// export const Footer = styled.div`
//   border-top: 1px solid ${({ theme }) => theme.colors.font};
//   padding: 16px 4px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 4px;

//   svg {
//     width: 16px;
//     height: 16px;
//   }

//   strong {
//     font-size: 12px;
//   }

//   @media screen and (min-width: 768px) and (max-width: 1023px) {
//     strong {
//       display: none;
//     }
//   }

//   @media screen and (max-width: 767px) {
//     strong {
//       display: none;
//     }
//   }
// `;

export const Main = styled.div`
  grid-area: main;

  display: grid;
  grid-template-areas: 'panel list';
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
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
    padding: 8px;
  }
`;

// export const Main = styled.main`
//   grid-area: main;
//   display: grid;
//   grid-template-areas: 'panel list';
//   grid-template-rows: auto;
//   grid-template-columns: 1fr 1fr;
//   overflow: auto;
//   background: ${({ theme }) => theme.colors.gray[900]};
//   border: 1px solid red;

//   @media screen and (min-width: 768px) and (max-width: 1023px) {
//     grid-template-areas:
//       'panel'
//       'list';
//     grid-template-columns: 1fr;
//   }

//   @media screen and (max-width: 767px) {
//     grid-template-areas:
//       'panel'
//       'list';
//     grid-template-columns: 1fr;
//   }
// `;

// export const Nav = styled.div`
//   height: 100%;
// `;
