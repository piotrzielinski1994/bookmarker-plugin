import React, { useState, useContext } from 'react';
import { WithDroppableState } from 'utils/hoc/with-droppable/with-droppable.interfaces';
import { BookmarksContext } from 'utils/context/bookmarks/bookmarks';
import { Bookmark } from 'utils/api/api.interfaces';

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

      // workaround: compare event.target with this
      if (event.target.id === `item-${props.id}`) {
        updateState({ isDragOver: true });
      }
    };

    const handleDragLeave = (event: any) => {
      event.preventDefault();
      updateState({ isDragOver: false });
    };

    const handleDrop = (event: any) => {
      event.preventDefault();
      updateState({ isDragOver: false });

      const itemId = event.dataTransfer.getData('itemId');
      const item = document.getElementById(itemId);

      if (item !== null) {
        item.style.display = 'block';
        event.target.appendChild(item);
      }

      // bookmarksContext.updateBookmarks({} as Bookmark[]);
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
