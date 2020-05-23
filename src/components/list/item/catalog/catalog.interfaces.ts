import { Bookmark } from 'utils/api/api.interfaces';
import { TreeStructureInterface } from 'components/list/list.interfaces';

export interface ListItemCatalogProps extends Omit<Bookmark, 'href'>, TreeStructureInterface {}
