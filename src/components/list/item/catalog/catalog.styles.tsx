import styled from 'styled-components';
import FolderIcon from '@material-ui/icons/Folder';
import { Text } from 'components/text/text.styles';
import { TreeStructureInterface } from 'components/list/list.interfaces';

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledButton = styled.button<TreeStructureInterface>`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: none;
  text-align: left;
  outline: none;
  cursor: pointer;
  border: 1px solid green;
  padding-left: ${({ depth }) => depth && `${depth * 30}px`};

  &:hover {
    background-color: #303030;
  }
`;

export const StyledFolderIcon = styled(FolderIcon)`
  fill: red;
  width: 40px;
  margin-right: 8px;
`;

export const StyledText = styled(Text)`
  padding-top: 5px;
`;
