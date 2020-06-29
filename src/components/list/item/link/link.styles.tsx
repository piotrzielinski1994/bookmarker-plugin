import React from 'react';
import styled from 'styled-components';
import { StyledLinkProps } from 'components/list/item/link/link.interfaces';

export const StyledWrapper = styled.div``;

export const StyledLink = styled(({ children, ...props }: StyledLinkProps) => (
  <a {...props} target="_blank">
    {children}
  </a>
))`
  text-decoration: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #eeeeee;
  }
`;
