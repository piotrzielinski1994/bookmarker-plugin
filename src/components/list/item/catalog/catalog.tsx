import React, { useState } from 'react';
import List from 'components/list/list';
import {
  StyledWrapper,
  StyledButton,
  StyledFolderIcon,
  StyledText,
} from 'components/list/item/catalog/catalog.styles';
import { ListItemCatalogProps } from 'components/list/item/catalog/catalog.interfaces';

const ListItemCatalog = ({ title, items }: ListItemCatalogProps) => {
  const [isCollapsed, toggleIsCollapsed] = useState(true);

  const handleClick = () => {
    toggleIsCollapsed(!isCollapsed);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={handleClick}>
        <StyledFolderIcon />
        <StyledText>{title}</StyledText>
      </StyledButton>
      {items && !isCollapsed && <List bookmarks={items} />}
    </StyledWrapper>
  );
};

export default ListItemCatalog;
