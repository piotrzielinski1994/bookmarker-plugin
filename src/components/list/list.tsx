import React from 'react';
import ListItem from 'components/list/item/item';
import { ListProps } from 'components/list/list.interfaces';
import { StyledWrapper } from 'components/list/list.styles';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';

const List = withDroppable(({ bookmarks, ...props }: ListProps) => {
  return (
    <StyledWrapper {...props}>
      {Object.values(bookmarks).map((bookmark) => (
        <ListItem key={bookmark.id} {...bookmark} />
      ))}
    </StyledWrapper>
  );
});

export default List;
