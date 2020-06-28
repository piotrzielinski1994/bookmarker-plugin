import React from 'react';
import { StyledLink } from 'components/list/item/link/link.styles';
import { ListItemLinkProps } from 'components/list/item/link/link.interfaces';

const ListItemLink = ({ bookmark, depth }: ListItemLinkProps) => {
  return <StyledLink href={bookmark.href}>{bookmark.title}</StyledLink>;
};

export default ListItemLink;
