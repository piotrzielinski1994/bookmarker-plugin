import React from 'react';
import { StyledWrapper } from 'components/list/item/item.styles';
import { ListItemProps } from 'components/list/item/item.interfaces';
import { Bookmark } from 'utils/api/api.interfaces';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';
import withDraggable from 'utils/hoc/with-draggable/with-draggable';

const ListItem = withDroppable(
  withDraggable(
    ({ id, title, href, items, depth = 0, ...props }: ListItemProps) => {
      const isFolder = items !== undefined;

      return (
        <StyledWrapper {...props} id={`item-${id}`} depth={depth}>
          {`Item: ${id}: ${title}`}
          {isFolder &&
            Object.values(items as Bookmark[]).map((item) => (
              <ListItem key={item.id} {...item} depth={depth + 1} />
            ))}
        </StyledWrapper>
      );
    },
  ),
);

export default ListItem;
