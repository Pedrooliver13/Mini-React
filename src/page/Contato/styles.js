import styled from 'styled-components';

export const ContactRow = styled.section`
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(2, 1fr);
  margin: 8px;
`;


export const ContactImages = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  pointer-events: none;
  
  overflow: hidden;
  object-fit: contain;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
`;