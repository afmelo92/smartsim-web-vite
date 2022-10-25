import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border: 1px solid blue; */
  grid-area: panel;
  padding: 16px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-area: panel;
  }

  @media screen and (max-width: 767px) {
    grid-area: panel;
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
  /* justify-content: center; */
  padding: 16px 32px;
  gap: 64px;
  background: ${({ theme }) => theme.colors.gray[500]};

  #send-form {
    /* border: 1px solid yellow; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      border-radius: 4px;
      padding: 12px 8px;
      border: none;
    }

    textarea {
      min-height: 250px;
      max-height: 500px;
      border-radius: 4px;
      padding: 12px 8px;
      border: none;
    }

    button {
      border-radius: 4px;
      padding: 16px 8px;
      cursor: pointer;
      border: none;
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.font};
      font-weight: bold;
      font-size: 16px;
      transition: ease 0.4s;

      :hover {
        background: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }
`;

export const PanelHeader = styled.div`
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
  /* border: 1px solid red; */
  width: 100%;
  display: grid;
  grid-template-areas:
    'command command command'
    'command command command';

  grid-gap: 4px;

  button {
    border-radius: 4px;
    padding: 8px;
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
