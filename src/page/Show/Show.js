import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../Theme/Container';

import useFetch from '../../Hooks/useFetch';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Product from '../../Components/Product/Product';
import Loading from '../../Components/Loading/Loading';

const Show = () => {
  const { id } = useParams();
  const { data, loading, req } = useFetch();

  React.useEffect(() => {
    req(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [req, id]);

  return (
    <Container>
      <Header />
      {loading && <Loading />}
      {data && <Product data={data} /> }
      <Footer />
    </Container>
  );
};

export default Show;
