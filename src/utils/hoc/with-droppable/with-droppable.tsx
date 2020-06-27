import React, { useState, useContext } from 'react';
import { WithDroppableState } from 'utils/hoc/with-droppable/with-droppable.interfaces';
import { BookmarksContext } from 'utils/context/bookmarks/bookmarks';
import { addNode, getNode, removeNode, isDirectParent } from 'utils/helpers';

const withDroppable = (Component: any) => {
  return (props: any) => {
    const { bookmarks, updateBookmarks } = useContext(BookmarksContext);

    const [state, setState] = useState<WithDroppableState>({
      isDragOver: false,
    });

    const updateState = ({ ...args }: Partial<WithDroppableState>) => {
      setState({ ...state, ...args });
    };

    const handleDragOver = (event: any) => {
      event.preventDefault();
      event.stopPropagation();

      if (state.isDragOver === false) {
        updateState({ isDragOver: true });
      }
    };

    const handleDragLeave = (event: any) => {
      event.stopPropagation();

      updateState({ isDragOver: false });
    };

    const handleDrop = (event: any) => {
      event.stopPropagation();
      event.preventDefault();

      const itemId = event.dataTransfer.getData('itemId');
      const item = document.getElementById(itemId);

      if (item !== null) {
        updateState({ isDragOver: false });

        try {
          const targetId = event.target.id;
          const parentId = targetId
            ? Number.parseInt(targetId.match(/\d+/)[0])
            : null;
          const nodeId = Number.parseInt(itemId.match(/\d+/)[0]);
          const node = getNode(nodeId, bookmarks);

          if (isDirectParent(nodeId, parentId, bookmarks)) {
            return;
          }

          if (node !== null) {
            let updatedTree = removeNode(nodeId, bookmarks);
            updatedTree = addNode(parentId, node, updatedTree);

            updateBookmarks(updatedTree);
          }
        } catch (error) {
          console.log('Error: ', error, itemId, event.target.id);
        }
      }
    };

    return (
      <Component
        {...props}
        isDragOver={state.isDragOver}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    );
  };
};

export default withDroppable;
