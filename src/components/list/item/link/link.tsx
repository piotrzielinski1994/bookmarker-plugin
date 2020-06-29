import React from 'react';
import { StyledLink } from 'components/list/item/link/link.styles';
import { ListItemLinkProps } from 'components/list/item/link/link.interfaces';

const ListItemLink = ({ bookmark, depth }: ListItemLinkProps) => {
  const redirect = () => {
    window.open(bookmark.href, '_blank');
  };

  return <StyledLink onClick={redirect}>{bookmark.title}</StyledLink>;
};

export default ListItemLink;
