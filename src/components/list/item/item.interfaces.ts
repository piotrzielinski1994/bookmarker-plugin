import { Bookmark } from 'utils/api/api.interfaces';
import { WithDroppableInterface } from 'utils/hoc/with-droppable/with-droppable.interfaces';
import { WithDraggableInterface } from 'utils/hoc/with-draggable/with-draggable.interfaces';

export interface ListItemProps
  extends Bookmark,
    WithDraggableInterface,
    WithDroppableInterface {
  depth: number;
}

export interface StyledWrapperProps {
  isDragOver?: boolean;
  isDragging?: boolean;
  depth: number;
}
