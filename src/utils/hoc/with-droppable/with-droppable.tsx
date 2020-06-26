import React, { useState } from 'react';
import { WithDroppableState } from 'utils/hoc/with-droppable/with-droppable.interfaces';

const withDroppable = (Component: any) => {
  return (props: any) => {
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

      const cardId = event.dataTransfer.getData('itemId');
      const card = document.getElementById(cardId);

      if (card !== null) {
        card.style.display = 'block';
        event.target.appendChild(card);
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
