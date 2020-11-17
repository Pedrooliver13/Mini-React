import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 0px;
  top: -8px;
  button {
    color: ${({ theme }) => theme.secondary};
    padding: 10px;
    border: 0;
    font-size: 1.1rem;
    background: transparent;
    cursor: pointer;
    outline: 0;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background: ${({theme}) => theme.primary};
  border-radius: 8px;
  padding: 20px;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-height: 600px;
  overflow: hidden;

  img {
    object-fit: contain;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 360px) {
    max-height: 700px;
    overflow-y: hidden;
  }
  @media (min-width: 780px) {
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
  }
`;
