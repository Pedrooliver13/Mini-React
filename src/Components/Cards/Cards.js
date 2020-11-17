import React from 'react';
import { CardsWrapper, Card, CardTitle, CardImage } from './styles';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

const Cards = () => {
  const { req, data, loading } = useFetch();
  React.useEffect(() => req('https://ranekapi.origamid.dev/json/api/produto'), [
    req,
  ]);

  return (
    <CardsWrapper>
      {loading && <p>Carregando...</p>}

      {data &&
        data.map(({ id, nome, fotos }) => (
          <Card key={id}>
            <Link to={`product/${id}`}>
              <CardImage src={fotos[0].src} />
            </Link>
            <CardTitle>{nome}</CardTitle>
          </Card>
        ))}
    </CardsWrapper>
  );
};

export default Cards;
