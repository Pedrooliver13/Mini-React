import styled, { keyframes } from 'styled-components';

export const TitleWrapper = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const blink = keyframes`
  to {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.3rem;
  font-family: 'Courier New', Courier, monospace;

  &::after {
    content: '|';
    opacity: 0;
    animation: ${blink} 0.8s infinite linear;
  }
`;
