import React from 'react';
import { StyledWrapper } from 'components/list/item/item.styles';
import { ListItemProps } from 'components/list/item/item.interfaces';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';
import withDraggable from 'utils/hoc/with-draggable/with-draggable';

const ListItem = withDroppable(
  withDraggable(
    ({ id, title, href, items, depth = 0, ...props }: ListItemProps) => (
      <StyledWrapper {...props} id={`item-${id}`} depth={depth}>
        {`Item: ${id}: ${title}`}
        {items !== undefined &&
          items.map((item) => (
            <ListItem key={item.id} {...item} depth={depth + 1} />
          ))}
      </StyledWrapper>
    ),
  ),
);

export default ListItem;
