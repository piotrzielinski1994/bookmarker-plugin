import React, { useEffect, useState } from 'react';
import GlobalStyle from 'utils/theme/global';
import Api from 'utils/api/api';
import List from 'components/list/list';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'utils/theme/theme';
import { Bookmark } from 'utils/api/api.interfaces';
import { BookmarksContext } from 'utils/context/bookmarks/bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([] as Bookmark[]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Api.getBookmarks();

      setBookmarks(result);
    };

    fetchData();
  }, []);

  return (
    <BookmarksContext.Provider
      value={{ bookmarks: bookmarks, updateBookmarks: setBookmarks }}
    >
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <List />
      </ThemeProvider>
    </BookmarksContext.Provider>
  );
}

export default App;
