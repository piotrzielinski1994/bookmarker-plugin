import React from 'react';
import { StyledWrapper } from 'components/list/item/item.styles';
import { ListItemProps } from 'components/list/item/item.interfaces';
import withDroppable from 'utils/hoc/with-droppable/with-droppable';
import withDraggable from 'utils/hoc/with-draggable/with-draggable';
import ListItemFolder from 'components/list/item/folder/folder';

const ListItem = withDroppable(
  withDraggable(({ bookmark, depth, ...props }: ListItemProps) => {
    const isFolder = bookmark.items !== undefined;
    return (
      <StyledWrapper
        {...props}
        id={`droppable-${bookmark.id}`}
        depth={depth}
        canDrop={isFolder}
      >
        {!isFolder ? (
          <>{bookmark.title}</>
        ) : (
          <ListItemFolder bookmark={bookmark} depth={depth} />

          // <>
          //   <button>{bookmark.title}</button>
          //   {bookmark.items !== undefined &&
          //     bookmark!.items.map((item) => (
          //       <ListItem
          //         key={item.id}
          //         bookmark={item}
          //         depth={depth + 1}
          //         canDrop={item.items !== undefined}
          //       />
          //     ))}
          // </>
        )}
      </StyledWrapper>
    );
  }),
);

export default ListItem;
