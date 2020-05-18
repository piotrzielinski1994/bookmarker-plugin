import React from 'react';
import { ListProps } from 'components/list/list.interfaces';
import { StyledWrapper } from 'components/list/list.styles';
import ListItem from 'components/list/item/item';

const List = ({ bookmarks }: ListProps) => (
  <StyledWrapper>
    {bookmarks.map((bookmark) => (
      <ListItem key={bookmark.id} {...bookmark}></ListItem>
    ))}
  </StyledWrapper>
);

export default List;
