import { WithDroppableInterface } from 'utils/hoc/with-droppable/with-droppable.interfaces';
import { Bookmark } from 'utils/api/api.interfaces';

export interface ListProps extends WithDroppableInterface {
  bookmarks: Bookmark[];
}

export interface StyledWrapperProps {
  isDragOver: boolean;
}
