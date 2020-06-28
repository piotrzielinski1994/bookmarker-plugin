import React, { useState, useContext } from 'react';
import { WithDroppableState } from 'utils/hoc/with-droppable/with-droppable.interfaces';
import { BookmarksContext } from 'utils/context/bookmarks/bookmarks';
import { addNode, getNode, removeNode } from 'utils/helpers';

const getClosestDroppableId = (eventTarget: Element) => {
  const closest = eventTarget.closest('*[id^=droppable-]');

  if (closest === null || (closest && closest.id === '')) {
    return null;
  }

  return closest.id;
};

const pullNumberFromText = (text: string) => {
  const matches = text.match(/\d+/);

  return matches && Number.parseInt(matches[0]);
};

const withDroppable = (Component: any) => {
  return (props: any) => {
    const { bookmarks, updateBookmarks } = useContext(BookmarksContext);

    const [state, setState] = useState<WithDroppableState>({
      isDragOver: false,
    });

    const getNodeId = (eventTarget: Element) => {
      const closestDroppableNodeId = getClosestDroppableId(eventTarget);

      if (!closestDroppableNodeId) {
        return null;
      }

      return pullNumberFromText(closestDroppableNodeId);
    };

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

      const itemId = event.dataTransfer!.getData('itemId');
      const item = document.getElementById(itemId);

      if (item === null) {
        return;
      }

      try {
        const parentId = getNodeId(event.target);
        const nodeId = pullNumberFromText(itemId);

        if (nodeId === null) {
          return;
        }

        const canDrop = parentId === null || props.bookmark.items !== undefined;

        if (!canDrop) {
          return;
        }

        const node = getNode(nodeId, bookmarks);

        if (node === null) {
          return;
        }

        let updatedTree = removeNode(nodeId, bookmarks);
        updatedTree = addNode(parentId, node, updatedTree);

        updateBookmarks(updatedTree);
      } catch (error) {
        console.log('Error: ', error, itemId, event.target.id);
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
