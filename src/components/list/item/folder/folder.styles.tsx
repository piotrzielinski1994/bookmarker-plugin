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
`;

export const StyledFolder = styled.div<StyledFolderProps>`
  padding: 0 10px;
  display: ${({ isCollapsed }) => isCollapsed && 'none'};
`;
