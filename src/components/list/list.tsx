import React, { useContext } from 'react';
import ListItem from 'components/list/item/item';
import { ListProps } from 'components/list/list.interfaces';
import { StyledWrapper } from 'components/list/list.styles';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';
import { BookmarksContext } from 'utils/context/bookmarks/bookmarks';

const List = withDroppable((props: ListProps) => {
  const { bookmarks } = useContext(BookmarksContext);

  return (
    <StyledWrapper {...props}>
      {bookmarks.map((bookmark) => (
        <ListItem key={bookmark.id} {...bookmark} />
      ))}
    </StyledWrapper>
  );
});

export default List;
