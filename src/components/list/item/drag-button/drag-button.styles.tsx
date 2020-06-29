import styled from 'styled-components';
import { StyledWrapperProps } from 'components/list/item/drag-button/drag-button.interfaces';

export const StyledWrapper = styled.div<StyledWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  &:active,
  &:focus {
    cursor: grabbing;
  }
`;
