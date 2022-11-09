import styled, { css } from 'styled-components';

const whenOpen = css`
  opacity: 1;
  z-index: 99999;
`;

const whenClosed = css`
  opacity: 0;
  z-index: -99999;
  pointer-events: none;
`;

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ isOpen }) => css`
    ${isOpen ? whenOpen : whenClosed};
    display: flex;
    backdrop-filter: blur(5px);
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: rgba(1, 1, 1, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 3rem;
    transition: 0.3s ease;
    overflow-x: hidden;

    @media (max-width: 600px) {
      padding: 3.5rem 0.8rem 1.5rem;
    }
  `};
`;

export const Content = styled.div`
  ${() => css`
    width: 90%;
    height: 90%;
    max-width: 100%;
    max-height: 100%;
    background: white;
    border-radius: 4px;
    padding: 32px;
    display: flex;

    @media (max-width: 600px) {
      padding: 16px;
    }
  `}
`;

export const Close = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 36px;
    height: 36px;
    stroke: ${({ theme }) => theme.colors.font};
    fill: none;
  }

  &:hover {
    opacity: 0.6;
  }

  transition: 0.3s ease;

  @media (max-width: 600px) {
    top: 1px;
    right: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
