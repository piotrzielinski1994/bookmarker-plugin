import styled from 'styled-components';
import {
  StyledWrapperProps,
  StyledButtonProps,
  StyledFolderProps,
} from 'components/list/item/folder/folder.interfaces';

export const StyledWrapper = styled.div<StyledWrapperProps>`
  width: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    width: 100%;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  width: 100%;
  height: ${({ isCollapsed }) => (isCollapsed ? '100%' : '30px')};
  background-color: inherit;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const StyledFolder = styled.div<StyledFolderProps>`
  padding: 0 10px;
  display: ${({ isCollapsed }) => isCollapsed && 'none'};
`;
