import { Bookmark } from 'utils/api/api.interfaces';
import { WithDroppableInterface } from 'utils/hoc/with-droppable/with-droppable.interfaces';

export interface ListItemFolderProps {
  bookmark: Bookmark;
  depth: number;
}

export interface StyledWrapperProps {}

export interface StyledButtonProps {
  isCollapsed: boolean;
}

export interface StyledFolderProps {
  isCollapsed: boolean;
}
