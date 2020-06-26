import { Bookmark } from 'utils/api/api.interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface BookmarksContextInterface {
  bookmarks: Bookmark[];
  updateBookmarks: Dispatch<SetStateAction<Bookmark[]>>;
}
