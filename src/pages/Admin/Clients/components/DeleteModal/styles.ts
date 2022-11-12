import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    text-align: center;

    h1 {
      color: ${theme.colors.danger.main};
    }

    h2 {
      /* color: ${theme.colors.gray[500]}; */

      strong {
        color: ${theme.colors.danger.main};
      }
    }

    div {
      display: flex;
      gap: 4px;

      #delete {
        width: 96px;
        background: ${theme.colors.danger.main};

        &:hover {
          background: ${theme.colors.danger.dark};
        }
      }

      #cancel {
        width: 96px;
        background: ${theme.colors.gray[300]};

        &:hover {
          background: ${theme.colors.gray[400]};
        }
      }
    }
  `}
`;
