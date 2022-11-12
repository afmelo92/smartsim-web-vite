import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  grid-area: list;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray[500]};
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 8px;
  min-height: calc(100vh - 96px);

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 8px;
  }

  @media screen and (max-width: 767px) {
    padding: 8px;
  }
`;

export const MessagesHeader = styled.div`
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

    #refresh {
      max-width: max-content;
    }

    @media screen and (max-width: 767px) {
      h2 {
        font-size: 1.2rem;
      }
    }
  `}
`;

export const MessagesContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: relative;

    h3 {
      margin-bottom: 32px;
    }

    .empty-messages {
      margin-top: 32px;
      width: 120px;
    }

    .spinner {
      position: relative;
      width: 150px;
      height: 150px;
      top: 100%;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        stroke: ${theme.colors.primary.lighter};
      }
    }
  `}
`;

export const MessageBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100px;
    background: ${theme.colors.gray[400]};
    padding: 8px;
    border-radius: 4px;
    display: grid;
    grid-template-areas: 'header data';
    grid-template-rows: 1fr;
    grid-template-columns: max-content auto;
    grid-gap: 8px;

    @media screen and (max-width: 767px) {
      padding: 4px;
    }
  `}
`;

export const MessageHeader = styled.div`
  ${({ theme }) => css`
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.8rem;
    color: ${theme.colors.primary.light};

    @media screen and (max-width: 767px) {
      padding: 4px;
    }
  `}
`;

export const MessageData = styled.div`
  grid-area: data;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.8rem;

  @media screen and (max-width: 767px) {
    padding: 4px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  #pag-button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: min-content;
  }
`;
