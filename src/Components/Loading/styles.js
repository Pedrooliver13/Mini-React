import styled, { keyframes } from 'styled-components';

export const rotateBar = keyframes`
  to {transform: rotate(360deg);}
`;

export const LoadingBar = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.primary};
  border-right-color: transparent;

  animation: ${rotateBar} 1s infinite;
`;

