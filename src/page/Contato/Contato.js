import React from 'react';
import { ContactRow, ContactContent, ContactImages } from './styles';
import { Container } from '../../Theme/Container';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contato = () => {
  return (
    <Container>
      <Header />

      <ContactRow>
        <div>
          <ContactImages src="https://source.unsplash.com/user/erondu/500x700" />
        </div>

        <ContactContent>
          <h1>EU sou o contato</h1>;
        </ContactContent>
      </ContactRow>

      <Footer />
    </Container>
  );
};

export default Contato;
