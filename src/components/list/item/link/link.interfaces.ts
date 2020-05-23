import { Bookmark } from 'utils/api/api.interfaces';
import { TreeStructureInterface } from 'components/list/list.interfaces';

export interface ListItemLinkProps extends Omit<Bookmark, 'items'>, TreeStructureInterface {}
