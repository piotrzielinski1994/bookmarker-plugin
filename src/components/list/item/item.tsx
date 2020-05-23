import React from 'react';
import { ListItemProps } from 'components/list/item/item.interfaces';
import { StyledWrapper } from 'components/list/item/item.styles';
import ListItemCatalog from 'components/list/item/catalog/catalog';
import ListItemLink from 'components/list/item/link/link';

const ListItem = (props: ListItemProps) => {
  const isLink = !!props.href;

  return (
    <StyledWrapper>
      {isLink ? <ListItemLink {...props} /> : <ListItemCatalog {...props} />}
    </StyledWrapper>
  );
};

export default ListItem;
