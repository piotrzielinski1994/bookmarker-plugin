import { Bookmark } from 'utils/api/api.interfaces';
import { WithDraggableInterface } from 'utils/hoc/with-draggable/with-draggable.interfaces';
import { WithDroppableInterface } from 'utils/hoc/with-droppable/with-droppable.interfaces';

export interface ListItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    WithDraggableInterface,
    WithDroppableInterface {
  bookmark: Bookmark;
  depth: number;
}

export interface StyledWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    WithDraggableInterface,
    WithDroppableInterface {
  depth: number;
  canDrop: boolean;
}
