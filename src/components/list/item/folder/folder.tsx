import React, { useState } from 'react';
import { ListItemFolderProps } from 'components/list/item/folder/folder.interfaces';
import {
  StyledWrapper,
  StyledButton,
  StyledButtonContent,
  StyledFolder,
} from 'components/list/item/folder/folder.styles';
import { Bookmark } from 'utils/api/api.interfaces';
import ListItem from 'components/list/item/item';
import DragButton from 'components/list/item/drag-button/drag-button';

const ListItemFolder = ({
  bookmark,
  depth,
  dragProps,
}: ListItemFolderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={toggleIsCollapsed} isCollapsed={isCollapsed}>
        <StyledButtonContent>{bookmark.title}</StyledButtonContent>
        <DragButton {...dragProps} />
      </StyledButton>
      <StyledFolder isCollapsed={isCollapsed}>
        {(bookmark.items as Bookmark[]).map((item) => (
          <ListItem key={item.id} bookmark={item} depth={depth + 1} />
        ))}
      </StyledFolder>
    </StyledWrapper>
  );
};

export default ListItemFolder;
