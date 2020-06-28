import React, { useState } from 'react';
import { ListItemFolderProps } from 'components/list/item/folder/folder.interfaces';
import {
  StyledWrapper,
  StyledButton,
} from 'components/list/item/folder/folder.styles';
import { Bookmark } from 'utils/api/api.interfaces';
import ListItem from 'components/list/item/item';

const ListItemFolder = ({ bookmark, depth }: ListItemFolderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={toggleIsCollapsed} isCollapsed={isCollapsed}>
        {bookmark.title}
      </StyledButton>
      {!isCollapsed &&
        (bookmark!.items as Bookmark[]).map((item) => (
          <ListItem key={item.id} bookmark={item} depth={depth + 1} />
        ))}
    </StyledWrapper>
  );
};

export default ListItemFolder;
