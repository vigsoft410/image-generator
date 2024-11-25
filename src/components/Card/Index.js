// src/App.js
import React from 'react';
import { MainContainer } from './Styles';

const Card = ({children}) => {

  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Card;

