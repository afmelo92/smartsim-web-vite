import styled, { css } from 'styled-components';

type ContainerProps = {
  focus?: boolean;
  disabled?: boolean;
  error?: boolean;
};

const whenDisabled = css`
  ${({ theme }) => `
    outline: 3px solid ${theme.colors.gray[200]};
    cursor: not-allowed;
    color: ${theme.colors.gray[200]};
    stroke: ${theme.colors.gray[200]};
  `}
`;

const whenFocused = css`
  ${({ theme }) => `
    outline: 3px solid ${theme.colors.primary.main};
    stroke: ${theme.colors.primary.main};
  `};
`;

const whenError = css`
  ${({ theme }) => `
    outline: 3px solid ${theme.colors.danger.main};
    color: ${theme.colors.danger.main};
    stroke: ${theme.colors.danger.main};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, focus, error, disabled }) => css`
    width: 100%;
    border-radius: 4px;
    border: none;
    background: #fff;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    font-size: 1rem;
    color: ${theme.colors.gray[600]};
    stroke: ${theme.colors.gray[600]};

    svg {
      fill: none;
      stroke: inherit;
      width: 22px;
      min-width: 18px;
    }

    input {
      color: inherit;
      width: inherit;
      font-size: inherit;
      border-radius: inherit;
      border: inherit;
      background: inherit;
      cursor: inherit;
    }

    ${focus && whenFocused};
    ${error && whenError};
    ${disabled && whenDisabled};
  `}
`;
