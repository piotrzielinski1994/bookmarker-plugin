import React from 'react';
import { StyledWrapper } from 'components/list/item/drag-button/drag-button.styles';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { DragButtonProps } from 'components/list/item/drag-button/drag-button.interfaces';

const DragButton = (props: DragButtonProps) => (
  <StyledWrapper draggable="true" {...props}>
    <DragIndicatorIcon />
  </StyledWrapper>
);

export default DragButton;
