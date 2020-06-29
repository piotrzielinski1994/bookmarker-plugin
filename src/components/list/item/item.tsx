import React from 'react';
import { StyledWrapper } from 'components/list/item/item.styles';
import { ListItemProps } from 'components/list/item/item.interfaces';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';
import withDraggable from 'utils/hoc/with-draggable/with-draggable';
import ListItemFolder from 'components/list/item/folder/folder';
import ListItemLink from 'components/list/item/link/link';

const ListItem = withDroppable(
  withDraggable(
    ({ bookmark, depth, onDragStart, onDragEnd, ...props }: ListItemProps) => {
      const isFolder = bookmark.items !== undefined;

      return (
        <StyledWrapper
          {...props}
          id={`droppable-${bookmark.id}`}
          depth={depth}
          canDrop={isFolder}
        >
          {!isFolder ? (
            <ListItemLink bookmark={bookmark} depth={depth} />
          ) : (
            <ListItemFolder bookmark={bookmark} depth={depth} />
          )}
          <div draggable="true" onDragStart={onDragStart} onDragEnd={onDragEnd}>
            asd
          </div>
        </StyledWrapper>
      );
    },
  ),
);

export default ListItem;
