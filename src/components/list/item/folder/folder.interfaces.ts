import { Bookmark } from 'utils/api/api.interfaces';
import { DragButtonProps } from 'components/list/item/drag-button/drag-button.interfaces';

export interface ListItemFolderProps {
  bookmark: Bookmark;
  depth: number;
  dragProps: DragButtonProps;
}

export interface StyledWrapperProps {}

export interface StyledButtonProps {
  isCollapsed: boolean;
}

export interface StyledFolderProps {
  isCollapsed: boolean;
}
