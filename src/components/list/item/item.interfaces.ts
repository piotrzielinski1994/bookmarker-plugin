import { Bookmark } from 'utils/api/api.interfaces';
import { WithDraggableInterface } from 'utils/hoc/with-draggable/with-draggable.interfaces';
import { WithDroppableInterface } from 'utils/hoc/with-droppable/with-droppable.interfaces';

export interface ListItemProps
  extends WithDraggableInterface,
    WithDroppableInterface {
  bookmark: Bookmark;
  depth: number;
}

export interface StyledWrapperProps {
  isDragOver?: boolean;
  isDragging?: boolean;
  depth: number;
  canDrop: boolean;
}
