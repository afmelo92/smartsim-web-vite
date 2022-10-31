import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    h1 {
      margin: 32px;
      font-size: 5rem;
    }
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  p {
    margin-top: 32px;
  }
`;
