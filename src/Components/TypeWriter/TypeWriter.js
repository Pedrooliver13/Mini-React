import React from 'react';
import { TitleWrapper, Title } from './styles';

const TypeWriter = ({ useRef, children }) => {
  React.useEffect(() => {
    const textArray = useRef.current.innerHTML.split('');
    useRef.current.innerHTML = '';

    textArray.forEach((element, index) => {
      const setTime = setTimeout(() => {
        useRef.current.innerHTML += element;
        if (index === textArray.length - 1) clearTimeout(setTime);
      }, 70 * index);
    });
  });

  return (
    <TitleWrapper>
      <Title ref={useRef}>{children}</Title>
    </TitleWrapper>
  );
};

export default TypeWriter;
