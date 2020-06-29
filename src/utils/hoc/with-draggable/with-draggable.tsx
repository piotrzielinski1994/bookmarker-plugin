import React, { useState } from 'react';
import { WithDraggableState } from 'utils/hoc/with-draggable/with-draggable.interfaces';
import { getClosestDroppableId, getClosestDroppable } from 'utils/helpers/dnd';
import { itemMinHeight } from 'components/list/item/item.styles';

const withDraggable = (Component: any) => {
  return (props: any) => {
    const [state, setState] = useState<WithDraggableState>({
      isDragging: false,
    });

    let defaultDisplayValue = 'flex';

    const updateState = ({ ...args }: Partial<WithDraggableState>) => {
      setState({ ...state, ...args });
    };

    const handleDragStart = (event: any) => {
      event.stopPropagation();

      updateState({ isDragging: true });

      const target = event.target;

      try {
        const closestItem = getClosestDroppable(target);

        const closestItemRect = closestItem.getBoundingClientRect();
        const dragIconRect = target.getBoundingClientRect();

        event.dataTransfer.setData('itemId', getClosestDroppableId(target));
        event.dataTransfer.setDragImage(
          closestItem,
          closestItemRect.width - dragIconRect.width / 2,
          itemMinHeight / 2,
        );

        defaultDisplayValue = closestItem.style.display;

        setTimeout(() => {
          closestItem.style.display = 'none';
        }, 0);
      } catch (error) {
        console.log('Error: ', error.message);
      }
    };

    const handleDragEnd = (event: any) => {
      event.stopPropagation();

      const closestItem = getClosestDroppable(event.target);
      closestItem.style.display = defaultDisplayValue;

      updateState({ isDragging: false });
    };

    return (
      <Component
        {...props}
        isDragging={state.isDragging}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
    );
  };
};

export default withDraggable;
