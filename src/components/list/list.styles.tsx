import styled from 'styled-components';
import { StyledWrapperProps } from 'components/list/list.interfaces';

export const StyledWrapper = styled.div<StyledWrapperProps>`
  height: 100%;
  padding: 10px;
  background-color: ${({ isDragOver }) => {
    if (isDragOver) {
      return '#81c784';
    }

    return '#fff';
  }};
`;
