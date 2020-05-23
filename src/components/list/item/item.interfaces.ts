import { Bookmark } from 'utils/api/api.interfaces';
import { TreeStructureInterface } from 'components/list/list.interfaces';

export interface ListItemProps extends Bookmark, TreeStructureInterface {}
