import React, { useState, useContext } from 'react';
import { WithDroppableState } from 'utils/hoc/with-droppable/with-droppable.interfaces';
import { BookmarksContext } from 'utils/context/bookmarks/bookmarks';
import { getNode, isFolder, moveNode } from 'utils/helpers/tree';
import {
  getNodeId,
  pullNumberFromText,
  getClosestDroppable,
} from 'utils/helpers/dnd';

const withDroppable = (Component: any) => {
  return (props: any) => {
    const { bookmarks, updateBookmarks } = useContext(BookmarksContext);

    const [state, setState] = useState<WithDroppableState>({
      isDragOver: false,
    });

    const updateState = ({ ...args }: Partial<WithDroppableState>) => {
      setState({ ...state, ...args });
    };

    const handleDragEnter = (event: any) => {
      event.preventDefault();
      event.stopPropagation();

      // @TODO: Remove firing onDrag(Enter/Leave) events by ancestors
      setTimeout(() => {
        updateState({ isDragOver: true });
      }, 0);
    };

    const handleDragOver = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const handleDragLeave = (event: any) => {
      event.stopPropagation();

      updateState({ isDragOver: false });
    };

    const handleDrop = (event: any) => {
      event.stopPropagation();

      updateState({ isDragOver: false });

      try {
        const nodeId = pullNumberFromText(event.dataTransfer.getData('itemId'));

        if (nodeId === null) {
          return;
        }

        const parentId = getNodeId(getClosestDroppable(event.target));

        if (nodeId === parentId) {
          return;
        }

        const parentNode = parentId && getNode(parentId, bookmarks);
        const canDrop =
          parentId === null || (parentNode && isFolder(parentNode));

        if (!canDrop) {
          return;
        }

        const updatedTree = moveNode(nodeId, parentId, bookmarks);

        updateBookmarks(updatedTree);
      } catch (error) {
        console.log('Error: ', error.message);
      }
    };

    return (
      <Component
        {...props}
        isDragOver={state.isDragOver}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    );
  };
};

export default withDroppable;
