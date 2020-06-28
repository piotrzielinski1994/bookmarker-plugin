import styled from 'styled-components';
import {
  StyledWrapperProps,
  StyledButtonProps,
} from 'components/list/item/folder/folder.interfaces';

export const StyledWrapper = styled.div<StyledWrapperProps>`
  background-color: inherit;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: none;
  background-color: inherit;
  cursor: pointer;
  height: ${({ isCollapsed }) => isCollapsed && '100%'};
  width: ${({ isCollapsed }) => isCollapsed && '100%'};
  padding: 0;
  margin: 0;
  display: flex;
`;
