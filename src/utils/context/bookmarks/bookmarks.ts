import React from 'react';
import { BookmarksContextInterface } from './bookmarks.interfaces';

export const BookmarksContext = React.createContext(
  {} as BookmarksContextInterface,
);
