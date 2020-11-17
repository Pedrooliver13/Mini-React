import React from 'react';
import { CardsWrapper, Card, CardTitle, CardImage } from './styles';
import useFetch from '../../Hooks/useFetch';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Cards = () => {
  const { req, data, loading } = useFetch();
  React.useEffect(() => req('https://ranekapi.origamid.dev/json/api/produto'), [
    req,
  ]);

  return (
    <CardsWrapper>
      {loading && <p>Carregando...</p>}

      {!loading &&
        data &&
        data.map(({ id, nome, fotos }) => (
          <Card key={id}>
            <CardImage src={fotos[0].src} />
            <CardTitle>{nome}</CardTitle>
          </Card>
        ))}
    </CardsWrapper>
  );
};

export default Cards;
