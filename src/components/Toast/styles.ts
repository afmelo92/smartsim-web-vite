import styled, { css } from 'styled-components';

export const ToastContainer = styled.div`
  z-index: 200;
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
`;

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

type ToastMessageContainer = {
  type: 'default' | 'success' | 'danger';
};

export const ToastMessageContainer = styled.div<ToastMessageContainer>`
  ${({ theme, type }) => css`
    padding: 16px 32px;
    background: ${theme.colors.primary.main};
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    z-index: 200;

    .close-button {
      width: 20px;
      height: 20px;

      svg {
        stroke: ${theme.colors.font};
      }
    }

    ${containerVariants[type] || containerVariants.default};
  `}
`;
