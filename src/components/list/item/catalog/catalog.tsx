import React, { useState } from 'react';
import List from 'components/list/list';
import {
  StyledWrapper,
  StyledButton,
  StyledFolderIcon,
  StyledText,
} from 'components/list/item/catalog/catalog.styles';
import { ListItemCatalogProps } from 'components/list/item/catalog/catalog.interfaces';

const ListItemCatalog = ({ title, items, depth }: ListItemCatalogProps) => {
  const [isCollapsed, toggleIsCollapsed] = useState(true);

  const handleClick = () => {
    toggleIsCollapsed(!isCollapsed);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={handleClick} depth={depth}>
        <StyledFolderIcon />
        <StyledText>{title}</StyledText>
      </StyledButton>
      {items && !isCollapsed && <List bookmarks={items} depth={depth + 1} />}
    </StyledWrapper>
  );
};

export default ListItemCatalog;
