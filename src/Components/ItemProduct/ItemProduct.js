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

import Modal from '../Modal/Modal';

const ItemProduct = ({ data }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [photoModal, setPhotoModal] = React.useState('');
  const { fotos, nome, preco, descricao } = data;

  const priceCurrency = Number(preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleClick = React.useCallback(({ target }) => {
    setPhotoModal(target.src);
    setShowModal(true);
  }, []);

  return (
    <>
      <ProductWrapper>
        <ProductImages>
          {fotos.map(({ src, title }, index) => (
            <Image key={index} src={src} alt={title} onClick={handleClick} />
          ))}
        </ProductImages>

        <ProductContent>
          <ProductTitle>{nome}</ProductTitle>
          <ProductPrice>{priceCurrency}</ProductPrice>
          <ProductDescription>{descricao}</ProductDescription>
        </ProductContent>
      </ProductWrapper>
      <Modal active={showModal} setActive={setShowModal} photo={photoModal} />
    </>
  );
};

export default ItemProduct;
