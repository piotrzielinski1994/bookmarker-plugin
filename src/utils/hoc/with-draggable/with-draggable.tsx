import React, { useState } from 'react';
import { WithDraggableState } from 'utils/hoc/with-draggable/with-draggable.interfaces';

const withDraggable = (Component: any) => {
  return (props: any) => {
    const [state, setState] = useState<WithDraggableState>({
      isDragging: false,
    });

    let defaultDisplayValue = 'block';

    const updateState = ({ ...args }: Partial<WithDraggableState>) => {
      setState({ ...state, ...args });
    };

    const handleDragStart = (event: any) => {
      event.stopPropagation();

      updateState({ isDragging: true });

      const target = event.target;
      event.dataTransfer.setData('itemId', target.id);

      defaultDisplayValue = target.style.display;

      setTimeout(() => {
        target.style.display = 'none';
      }, 0);
    };

    const handleDragEnd = (event: any) => {
      event.stopPropagation();

      event.target.style.display = defaultDisplayValue;

      updateState({ isDragging: false });
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
