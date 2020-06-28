import React from 'react';
import styled from 'styled-components';
import { StyledLinkProps } from 'components/list/item/link/link.interfaces';

export const StyledLink = styled((props: StyledLinkProps) => (
  <a {...props} target="_blank" />
))`
  text-decoration: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #eeeeee;
  }
`;
