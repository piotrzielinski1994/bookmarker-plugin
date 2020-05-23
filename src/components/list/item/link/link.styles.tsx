import styled from 'styled-components';
import { TreeStructureInterface } from 'components/list/list.interfaces';

export const StyledWrapper = styled.div<TreeStructureInterface>`
  width: 100%;
  height: 40px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  padding-left: ${({ depth }) => `${depth * 30}px`};

  &:hover {
    background-color: #303030;
  }
`;
