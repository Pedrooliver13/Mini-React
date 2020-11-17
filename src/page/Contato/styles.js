import styled from 'styled-components';
import {FadeIn} from '../../Theme/FadeIn';

export const ContactWrapper = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  margin: 8px;

  animation: ${FadeIn} .6s ease;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  pointer-events: none;

  overflow: hidden;
  object-fit: contain;
`;

export const ContactContent = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  margin-left: 24px;
`;

export const ContactTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 24px;
`

export const ContactList = styled.ul`
  list-style: none;
  line-height: 2;

  li::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    margin-right: 8px;
  }
`;
