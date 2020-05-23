import { Bookmark } from 'utils/api/api.interfaces';

export interface TreeStructureInterface {
  depth: number;
}

export interface StyledWrapperProps {
  isRoot?: boolean;
}

export interface ListProps extends Partial<TreeStructureInterface> {
  bookmarks: Array<Bookmark>;
}
