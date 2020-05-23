import React, { useEffect, useState } from 'react';
import GlobalStyle from 'utils/theme/global';
import Api from 'utils/api/api';
import List from 'components/list/list';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'utils/theme/theme';
import { Bookmark } from 'utils/api/api.interfaces';

function App() {
  const [bookmarks, setBookmarks] = useState([] as Array<Bookmark>);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Api.getBookmarks();

      setBookmarks(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <List bookmarks={bookmarks} />
      </ThemeProvider>
    </>
  );
}

export default App;
