import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../Theme/Colors';

export const Button = styled.button`
  display: inline-block;
  font-size: 1.1rem;
  border-radius: 5px;
  border: 1px solid transparent;
  margin: 8px;
  padding: 8px 16px;
  outline: 0;
  pointer-events: all;
  cursor: pointer;  
  transition: all .5s ease;

  &:hover, &:focus {
    filter: brightness(70%);
  }
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  text-decoration: none;
  color: #000;
  
  background-color: ${Colors.gray};
  border-radius: 5px;
  border: 1px solid transparent;

  margin: 8px;
  padding: 12px 16px;

  outline: 0;
  pointer-events: all;
  cursor: pointer;  
  transition: all .5s ease;

  &:hover, &:focus {
    filter: brightness(90%);
  }
`;