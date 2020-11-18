import styled from 'styled-components';
import { FadeIn } from '../../Theme/FadeIn';

export const ProductWrapper = styled.section`
  display: flex;
  animation: ${FadeIn} .6s ease;
`;

export const ProductImages = styled.div`
  max-width: 400px;
  width: 100%;
  margin-right: 24px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin: 8px;
  border-radius: 5px;
  pointer-events: all;
  cursor: pointer;
  overflow: hidden;
  object-fit: contain;
`

export const ProductContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const ProductTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 2rem;
`;

export const ProductPrice = styled.p`
  border-radius: 5px; 
  font-weight: lighter;
  background-color: ${({ theme }) => theme.green};
  padding: 8px;
`;

export const ProductDescription = styled.div`
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
  margin-top: 8px;
`