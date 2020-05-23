import React from 'react';
import { ListProps } from 'components/list/list.interfaces';
import { StyledWrapper } from 'components/list/list.styles';
import ListItem from 'components/list/item/item';

const List = ({ bookmarks, depth = 0 }: ListProps) => (
  <StyledWrapper isRoot={depth === 0}>
    {Object.values(bookmarks).map((bookmark) => (
      <ListItem key={bookmark.id} {...bookmark} depth={depth || 0}></ListItem>
    ))}
  </StyledWrapper>
);

export default List;
