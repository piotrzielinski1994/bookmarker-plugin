import { Bookmark } from 'utils/api/api.interfaces';

export type ListItemLinkProps = Omit<Bookmark, 'items'>;
