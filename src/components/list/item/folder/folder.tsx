import React, { useState } from 'react';
import { ListItemFolderProps } from 'components/list/item/folder/folder.interfaces';
import {
  StyledWrapper,
  StyledButton,
  StyledFolder,
} from 'components/list/item/folder/folder.styles';
import { Bookmark } from 'utils/api/api.interfaces';
import ListItem from 'components/list/item/item';

const ListItemFolder = ({ bookmark, depth }: ListItemFolderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = () => {
    console.log('TEST toggleIsCollapsed: ', bookmark.title);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={toggleIsCollapsed} isCollapsed={isCollapsed}>
        {bookmark.title}
      </StyledButton>
      <StyledFolder isCollapsed={isCollapsed}>
        {(bookmark.items as Bookmark[]).map((item) => (
          <ListItem key={item.id} bookmark={item} depth={depth + 1} />
        ))}
      </StyledFolder>
    </StyledWrapper>
  );

  if (1) {
    return (
      <StyledButton onClick={toggleIsCollapsed} isCollapsed={isCollapsed}>
        {bookmark.title}
        {!isCollapsed &&
          (bookmark!.items as Bookmark[]).map((item) => (
            <ListItem key={item.id} bookmark={item} depth={depth + 1} />
          ))}
      </StyledButton>
    );
  } else {
    return (
      <StyledWrapper onClick={toggleIsCollapsed}>
        {bookmark.title}
        {!isCollapsed &&
          (bookmark!.items as Bookmark[]).map((item) => (
            <ListItem key={item.id} bookmark={item} depth={depth + 1} />
          ))}
      </StyledWrapper>
    );
  }
};

export default ListItemFolder;
