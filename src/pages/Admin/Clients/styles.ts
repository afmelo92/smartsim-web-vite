import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .spinner {
      position: relative;
      width: 150px;
      height: 150px;
      top: 250px;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        stroke: ${theme.colors.primary.lighter};
      }
    }

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

        div {
          margin: 0 auto;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

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

    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }

    @media screen and (max-width: 767px) {
    }
  `}
`;
