import styled from 'styled-components';
import { FadeIn } from '../../Theme/FadeIn';

export const CardsWrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 4px;
`;

export const Card = styled.div`
  color: ${({ theme }) => theme.primary};
  padding: 8px;
  pointer-events: all;
  cursor: pointer;
  transition: transform 0.5s ease;
  animation: ${FadeIn} 0.5s ease;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  object-fit: contain;
`;

export const CardTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-top: 1rem;
`;
