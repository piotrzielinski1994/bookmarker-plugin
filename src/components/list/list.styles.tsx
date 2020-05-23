import styled from 'styled-components';
import { StyledWrapperProps } from 'components/list/list.interfaces';

export const StyledWrapper = styled.ul<StyledWrapperProps>`
  height: 100%;
  display: grid;
  grid-gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
  background-color: #212121;
  margin-top: ${({ isRoot }) => !isRoot && '5px'};
  overflow-y: scroll;
`;
