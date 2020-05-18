import styled from 'styled-components';
import FolderIcon from '@material-ui/icons/Folder';
import { Text } from 'components/text/text.styles';

export const StyledWrapper = styled.div``;

export const StyledButton = styled.button`
  display: flex;
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 7px 10px;
  width: 100%;
  text-align: left;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #303030;
  }
`;

export const StyledFolderIcon = styled(FolderIcon)`
  fill: red;
  width: 40px;
`;

export const StyledText = styled(Text)`
  margin-left: 8px;
  padding-bottom: 1px;
  align-items: flex-end;
`;
