import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'panel list';
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.gray[900]};

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-areas:
      'panel'
      'list';
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-areas:
      'panel'
      'list';
    grid-template-columns: 1fr;
    padding: 8px;
  }
`;
