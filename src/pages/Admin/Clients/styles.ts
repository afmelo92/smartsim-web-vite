import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        padding: 8px;
        background: ${theme.colors.primary.main};

        &:first-child {
          border-radius: 4px 0 0 0;
        }

        &:last-child {
          border-radius: 0 4px 0 0;
        }
      }

      td {
        padding: 4px;
        text-align: center;
        background: ${theme.colors.gray[500]};

        /* &:first-child {
          text-align: start;
          padding: 4px 16px;
        } */

        button {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;

          svg {
            width: 20px;
            height: 20px;
            transition: 0.2s ease;
          }

          &.delete-button {
            svg {
              stroke: ${theme.colors.danger.main};
            }

            :hover {
              svg {
                stroke: ${theme.colors.danger.dark};
              }
            }
          }

          &.edit-button {
            svg {
              stroke: ${theme.colors.primary.main};
            }

            :hover {
              svg {
                stroke: ${theme.colors.primary.dark};
              }
            }
          }
        }
      }
    }
  `}
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ArrowButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  #arrow {
    max-width: max-content;
  }
`;

export const PagesSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    position: absolute;

    p {
      text-align: center;
      font-size: 0.8rem;
    }

    strong {
      font-size: 0.8rem;
    }

    select {
      border: none;
      background: ${theme.colors.primary.main};
      color: ${theme.colors.font};
      padding: 8px;
      border-radius: 4px;
    }

    .page-goto {
      display: flex;
      align-items: center;
      gap: 4px;

      input {
        width: 50px;
        padding: 8px;
        border-radius: 4px;
        border: none;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      flex-direction: column;
      position: relative;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
      position: relative;
    }
  `}
`;

export const DeleteModalContent = styled.div`
  color: red;
  width: 100vw;
  height: 100vh;
`;
