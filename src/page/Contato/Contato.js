import React from 'react';
import { ContactWrapper, ContactContent, Image, ContactTitle, ContactList } from './styles';
import { Container } from '../../Theme/Container';

import photo from '../../img/type-writer.jpg';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contato = () => {
  return (
    <Container>
      <Header />

      <ContactWrapper>
        <Image
          src={photo}
          alt="Imagem de contato"
        />
        
        <ContactContent>
          <ContactTitle>Entre em contato</ContactTitle>
          <ContactList> 
            <li>(43) 9999-8888</li>
            <li>pedroOliver13@hotmail.com</li>
          </ContactList>
        </ContactContent>
      </ContactWrapper>

      <Footer />
    </Container>
  );
};

export default Contato;
