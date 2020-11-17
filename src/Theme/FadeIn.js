import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const FadeOut = keyframes`
  from{
    opacity: 1;
    transform: translateX(0px);
  }
  to {
    opacity: 0;
    transform: translateX(-30px);
  }
`;