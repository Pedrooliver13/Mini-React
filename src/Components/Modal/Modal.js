import React from "react";
  import { ModalBackground, ModalClose, ModalContent} from "./styles";

function Modal({ photo, active, setActive }) {
  return (
    <ModalBackground active={active}>
      <ModalContent>
        <ModalClose>
          <button onClick={() => setActive(!active)}>fechar</button>
        </ModalClose>
        <img src={photo} alt="Foto do produto"/>
      </ModalContent>
    </ModalBackground>
  );
}

export default Modal;
