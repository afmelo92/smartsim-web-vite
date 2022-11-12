import styled, { css } from 'styled-components';

type WrapperProps = {
  loading?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  error?: boolean;
};

const whenLoading = css`
  cursor: wait;
`;

const whenError = css`
  ${({ theme }) => `
      background: ${theme.colors.danger.dark};

      :hover {
        background: ${theme.colors.danger.dark};
      }
  `}
`;

const whenDisabled = css`
  ${({ theme }) => `
    cursor: not-allowed;
    background: ${theme.colors.gray[300]};
    :hover {
      background: ${theme.colors.gray[300]};
    }
  `}
`;

const withSize = css`
  ${({ size }: WrapperProps) => {
    switch (size) {
      case 'sm':
        return `
          font-size: 0.8rem;
          min-width: 120px;
          button {

            padding: 8px 16px;

            svg {
              width: 14px;
            }
          }

          .spinner {
            position: relative;
            width: 14px;
            height: 14px;

            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        `;
      case 'md':
        return `
          font-size: 1rem;
          min-height: 48px;

          .spinner {
            position: relative;
            width: 20px;
            height: 20px;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);

            }
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error, loading }) => css`
    width: 100%;
    color: ${theme.colors.font};
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-weight: bold;
    font-size: 16px;
    background: ${theme.colors.primary.main};

    :hover {
      background: ${theme.colors.primary.dark};
    }

    svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: ${theme.colors.font};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px 24px;
      font-weight: inherit;
      font-size: inherit;
      width: inherit;
      color: inherit;
      border-radius: inherit;
      border: inherit;
      cursor: inherit;
      background: inherit;
      transition: ease 0.4s;
      position: relative;
    }

    ${withSize};
    ${disabled && whenDisabled};
    ${error && whenError};
    ${loading && whenLoading};
  `}
`;
