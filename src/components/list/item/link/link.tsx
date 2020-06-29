import React from 'react';
import {
  StyledLink,
  StyledLinkContent,
} from 'components/list/item/link/link.styles';
import { ListItemLinkProps } from 'components/list/item/link/link.interfaces';
import DragButton from 'components/list/item/drag-button/drag-button';

const ListItemLink = ({ bookmark, dragProps }: ListItemLinkProps) => {
  const redirect = () => {
    window.open(bookmark.href, '_blank');
  };

  return (
    <StyledLink onClick={redirect}>
      <StyledLinkContent>{bookmark.title}</StyledLinkContent>
      <DragButton {...dragProps} />
    </StyledLink>
  );
};

export default ListItemLink;
