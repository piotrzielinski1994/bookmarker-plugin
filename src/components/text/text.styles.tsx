import styled from 'styled-components';

export const Text = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => `${theme.font.size.m}px`};
  font-weight: ${({ theme }) => theme.font.weight.s};
  display: flex;
  width: 100%;
`;
