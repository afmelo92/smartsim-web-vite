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
      color: ${theme.colors.primary.main};
    }

    h2 {
      color: ${theme.colors.gray[500]};

      strong {
        color: ${theme.colors.primary.main};
      }
    }

    #edit-input {
      background: ${theme.colors.gray[50]};
    }

    div {
      display: flex;
      gap: 4px;

      #edit {
        width: 96px;
        background: ${theme.colors.primary.main};

        &:hover {
          background: ${theme.colors.primary.dark};
        }
      }

      #cancel {
        width: 96px;
        background: ${theme.colors.gray[100]};

        &:hover {
          background: ${theme.colors.gray[200]};
        }
      }
    }
  `}
`;
