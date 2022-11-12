import { FieldError } from 'react-hook-form';
import styled, { css } from 'styled-components';

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

const whenLoading = css`
  ${({ theme }) => `
    outline: 3px solid ${theme.colors.gray[300]};
    color: ${theme.colors.gray[200]};
    stroke: ${theme.colors.primary.main};
    cursor: wait;
    svg {
      stroke: ${theme.colors.gray[300]};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      color: ${theme.colors.primary.main};
      text-align: start;
    }

    small {
      display: block;
      margin-top: 8px;
      color: ${theme.colors.danger.main};
    }
  `}
`;

type ContainerProps = {
  focus: boolean;
  error?: FieldError;
  loading: number;
  disabled: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, focus, error, loading, disabled }) => css`
    width: 100%;
    border-radius: 4px;
    border: none;
    background: #fff;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    color: ${theme.colors.gray[600]};
    stroke: ${theme.colors.gray[600]};

    svg {
      fill: none;
      stroke: inherit;
      width: 24px;
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
    ${!!error && whenError};
    ${loading && whenLoading};
    ${disabled && whenDisabled};
  `}
`;

type InfoProps = {
  error: boolean;
};

export const Info = styled.small<InfoProps>`
  ${({ theme, error }) => css`
    display: inline-block;
    padding: 8px;
    color: ${error ? theme.colors.danger.main : theme.colors.primary.lighter};
  `}
`;
