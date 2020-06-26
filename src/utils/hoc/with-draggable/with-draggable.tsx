import React, { useState } from 'react';
import { WithDraggableState } from 'utils/hoc/with-draggable/with-draggable.interfaces';

const withDraggable = (Component: any) => {
  return (props: any) => {
    const [state, setState] = useState<WithDraggableState>({
      isDragging: false,
    });

    const updateState = ({ ...args }: Partial<WithDraggableState>) => {
      setState({ ...state, ...args });
    };

    const handleDragStart = (event: any) => {
      const target = event.target;

      if (target.id === `item-${props.id}`) {
        updateState({ isDragging: true });
      }

      event.dataTransfer.setData('itemId', target.id);

      setTimeout(() => {
        target.style.display = 'none';
      }, 0);
    };

    const handleDragEnd = (event: any) => {
      event.preventDefault();

      if (event.target.id === `item-${props.id}`) {
        updateState({ isDragging: false });
      }
    };

    return (
      <Component
        {...props}
        draggable="true"
        onDragStart={handleDragStart}
        isDragging={state.isDragging}
        onDragEnd={handleDragEnd}
      />
    );
  };
};

export default withDraggable;
