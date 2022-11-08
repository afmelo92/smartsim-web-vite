import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const OptionLink = styled(Link)`
  ${({ theme }) => css`
    padding: 64px;
    border-radius: 4px;
    background: ${theme.colors.gray[500]};
    text-decoration: none;
    color: ${theme.colors.font};
    font-weight: 500;
    border-left: 4px solid ${theme.colors.primary.main};
    transition: 0.2s ease;

    :hover {
      background: ${theme.colors.gray[600]};
      border-left: 4px solid ${theme.colors.primary.darker};
    }
  `}
`;
