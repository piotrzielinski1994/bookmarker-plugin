import React from 'react';
import GlobalStyle from 'utils/theme/global';
import Api from 'utils/api/api';
import List from 'components/list/list';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'utils/theme/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <List bookmarks={Api.getBookmarks()} />
      </ThemeProvider>
    </>
  );
}

export default App;
