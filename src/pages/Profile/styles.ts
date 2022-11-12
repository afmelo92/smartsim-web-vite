import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    /* border: 1px solid yellow; */
    background: ${theme.colors.gray[500]};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    position: relative;

    img {
      border: 4px solid ${theme.colors.primary.main};
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }

    span {
      border-bottom: 1px solid ${theme.colors.gray[200]};
    }

    #submit-button {
      position: absolute;
      bottom: 16px;
      max-width: calc(100% - 32px);
    }

    @media screen and (max-width: 767px) {
      #submit-button {
        position: static;
        max-width: 100%;
      }
    }
  `}
`;
