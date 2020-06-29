import styled from 'styled-components';
import { StyledWrapperProps } from 'components/list/item/item.interfaces';

export const itemMinHeight = 30;

export const StyledWrapper = styled.div<StyledWrapperProps>`
  min-height: ${itemMinHeight}px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  display: grid;
  grid-template-columns: 1fr 30px;
  overflow: hidden;
  background-color: ${({ depth, canDrop, isDragOver, isDragging }) => {
    if (isDragOver) {
      return canDrop ? '#81c784' : 'red';
    } else if (isDragging) {
      return '#f48fb1';
    }

    return depth % 2 ? '#fff' : '#a6d4fa';
  }};

  & > * {
    border-radius: inherit;
    flex-grow: 1;
  }
`;
