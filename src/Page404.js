import React from 'react';
import TypeWriter from './Components/TypeWriter/TypeWriter';

const Page404 = () => {
  const textRef = React.useRef();

  return (
    <TypeWriter useRef={textRef}>Error 404 - Página não encontrada.</TypeWriter>
  );
};

export default Page404;
