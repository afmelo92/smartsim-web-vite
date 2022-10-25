import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border: 1px solid orange; */
  padding: 16px;
  grid-area: list;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-area: list;
  }

  @media screen and (max-width: 767px) {
    grid-area: list;
  }
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 64px;
  background: ${({ theme }) => theme.colors.gray[500]};
`;

export const MessagesHeader = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary.main};
  }

  button {
    border-radius: 4px;
    padding: 12px 8px;
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.font};
    font-weight: bold;
    font-size: 12px;
    transition: ease 0.4s;

    :hover {
      background: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export const MessagesContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const MessageBox = styled.div`
  /* border: 1px solid yellow; */
  display: grid;
  grid-template-areas: 'info data';
  grid-template-columns: 100px auto;
  font-size: 14px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;

  #message-info {
    grid-area: info;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
  }

  #message-data {
    grid-area: data;
  }
`;
