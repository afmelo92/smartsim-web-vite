import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ArrowButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: absolute;
  right: 8px;

  #arrow {
    max-width: max-content;
    min-width: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    position: relative;
  }

  @media screen and (max-width: 767px) {
    position: relative;
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
