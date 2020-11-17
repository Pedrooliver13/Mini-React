import React from 'react';
import {
  ProductWrapper,
  ProductImages,
  Image,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductDescription,
} from './styles';

const Product = ({ data }) => {
  const { fotos, nome, preco, descricao } = data;
  const priceCurrency = Number(preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <ProductWrapper>
      <ProductImages>
        {fotos.map((item, index) => (
          <Image key={index} src={item.src} alt={item.title} />
        ))}
      </ProductImages>

      <ProductContent>
        <ProductTitle>{nome}</ProductTitle>
        <ProductPrice>{priceCurrency}</ProductPrice>
        <ProductDescription>{descricao}</ProductDescription>
      </ProductContent>
    </ProductWrapper>
  );
};

export default Product;
