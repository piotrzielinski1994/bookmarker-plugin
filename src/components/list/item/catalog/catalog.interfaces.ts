import { Bookmark } from 'utils/api/api.interfaces';

export type ListItemCatalogProps = Omit<Bookmark, 'href'>;
