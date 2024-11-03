// src/App.js
import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <h1>Gerador de Imagens com Stable Diffusion</h1>
      <PromptForm setImage={setImage} />
      
      {image && (
        <div>
          <h2>Imagem Gerada:</h2>
          <img src={image} alt="Imagem gerada pela IA" />
        </div>
      )}
    </div>
  );
}

export default App;
