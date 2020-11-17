import React from 'react';
import Cards from '../../Components/Cards/Cards';
import Header from '../../Components/Header/Header';

import { Container } from '../../Theme/Container';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <Container id="page-home">
      <Header />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;
