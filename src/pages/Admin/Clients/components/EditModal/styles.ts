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
    position: relative;

    strong {
      color: ${theme.colors.primary.main};
    }

    h2 {
      color: ${theme.colors.gray[500]};
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
        background: ${theme.colors.gray[300]};

        &:hover {
          background: ${theme.colors.gray[400]};
        }
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    strong {
      color: ${theme.colors.primary.main};
    }
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  align-self: end;
`;
