import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.gray[500]};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    position: relative;
    min-width: 450px;

    img {
      border: 4px solid ${theme.colors.primary.main};
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }

    span {
      border-bottom: 1px solid ${theme.colors.gray[200]};
    }
  `}
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  max-width: calc(100% - 32px);

  @media screen and (max-width: 767px) {
    min-width: auto;
    position: static;
    max-width: 100%;
  }
`;
