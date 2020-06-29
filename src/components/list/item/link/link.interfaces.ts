import { Bookmark } from 'utils/api/api.interfaces';
import { DragButtonProps } from 'components/list/item/drag-button/drag-button.interfaces';

export interface ListItemLinkProps {
  bookmark: Bookmark;
  dragProps: DragButtonProps;
}

export interface StyledLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
