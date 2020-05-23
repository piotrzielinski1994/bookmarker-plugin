import React from 'react';
import { StyledWrapper } from 'components/list/item/link/link.styles';
import { ListItemLinkProps } from 'components/list/item/link/link.interfaces';

const ListItemLink = ({ title, href }: ListItemLinkProps) => {
  return <StyledWrapper>{title}</StyledWrapper>;
};

export default ListItemLink;
