import styled from 'styled-components';
import bannerSrc from '@/assets/images/woman.jpg';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;

  display: grid;
  grid-template-areas: 'form banner';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-areas: 'form';
    grid-template-columns: auto;
  }

  @media screen and (max-width: 767px) {
    grid-template-areas: 'form';
    grid-template-columns: auto;
  }
`;

export const Form = styled.form`
  grid-area: form;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  padding: 32px;
`;

export const Fields = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 16px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const Banner = styled.div`
  grid-area: banner;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  background-image: url(${bannerSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.primary.main};
  background-blend-mode: multiply;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Options = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 32px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.font};
    transition: 0.2s ease;
    font-weight: bold;
    font-size: 1rem;

    :hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
