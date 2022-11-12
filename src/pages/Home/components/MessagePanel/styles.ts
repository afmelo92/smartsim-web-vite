import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    grid-area: panel;
    height: 100%;
    background: ${theme.colors.gray[500]};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 4px;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      padding: 8px;
    }

    @media screen and (max-width: 767px) {
      padding: 8px;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PanelHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      border-bottom: 4px solid ${theme.colors.primary.main};
      min-width: max-content;
    }

    #command {
      max-width: max-content;
      position: relative;

      :after {
        position: absolute;
        content: 'Em breve';
        width: content;
        height: content;
        background: ${theme.colors.danger.main};
        padding: 8px;
        border-radius: 4px;
        bottom: -15px;
        left: -25%;
      }
    }

    @media screen and (max-width: 767px) {
      h2 {
        font-size: 1.2rem;
      }
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const CommandsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2 {
    max-width: max-content;
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

export const CommandsContainer = styled.div`
  display: grid;
  grid-template-areas: 'command command command';
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4px;

  #command {
    font-size: 0.8rem;
    button {
      padding: 8px;
    }

    svg {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-areas: 'command command';
    grid-template-columns: 1fr 1fr;

    #command {
      button {
        padding: 8px 4px;
      }

      svg {
        width: 0;
        height: 0;
        display: none;
      }
    }
  }
`;
