import React from 'react';
import { StyledWrapper } from 'components/list/item/item.styles';
import { ListItemProps } from 'components/list/item/item.interfaces';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';
import withDraggable from 'utils/hoc/with-draggable/with-draggable';
import ListItemFolder from 'components/list/item/folder/folder';
import ListItemLink from 'components/list/item/link/link';
import { isFolder } from 'utils/helpers/tree';
import { DragButtonProps } from 'components/list/item/drag-button/drag-button.interfaces';

const ListItem = withDroppable(
  withDraggable(({ bookmark, depth, ...props }: ListItemProps) => {
    return (
      <StyledWrapper
        {...props}
        id={`droppable-${bookmark.id}`}
        depth={depth}
        canDrop={isFolder(bookmark)}
      >
        {!isFolder(bookmark) ? (
          <ListItemLink
            bookmark={bookmark}
            dragProps={props as DragButtonProps}
          />
        ) : (
          <ListItemFolder
            bookmark={bookmark}
            depth={depth}
            dragProps={props as DragButtonProps}
          />
        )}
      </StyledWrapper>
    );
  }),
);

export default ListItem;
