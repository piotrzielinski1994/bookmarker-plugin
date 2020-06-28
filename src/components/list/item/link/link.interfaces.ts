import { Bookmark } from 'utils/api/api.interfaces';

export interface ListItemLinkProps {
  bookmark: Bookmark;
  depth: number;
}

export interface StyledLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
