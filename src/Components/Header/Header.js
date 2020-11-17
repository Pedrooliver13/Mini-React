import React from 'react';
import { HeaderWrapper } from './styles';
import { ButtonLink } from '../../Theme/Button';

const Header = () => {
  return (
    <HeaderWrapper>
      <ButtonLink to="/">Produtos</ButtonLink>
      <ButtonLink to="contato">Contato</ButtonLink>
    </HeaderWrapper>
  );
};

export default Header;
