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
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 30px;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const StyledLinkContent = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
