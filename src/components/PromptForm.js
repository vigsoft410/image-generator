// src/components/PromptForm.js
import React, { useState } from 'react';
import axios from 'axios';

function PromptForm({ setImage }) {
  const [prompt, setPrompt] = useState('');
  const [serverUrl, setServerUrl] = useState('https://stabledifusionapi.onrender.com/generate-image'); // URL padrão
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Teste')
      setIsDisabled(true)
      const response = await axios.post(serverUrl, { prompt });
      console.log('response', response)
      setImage(`data:image/png;base64,${response.data.image}`);
      setIsDisabled(false)
    } catch (error) {
      setIsDisabled(false)
      console.error("Erro ao gerar imagem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL do Servidor:
        <input
          type="text"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <br />
      <label>
        Digite o prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={isDisabled}>{isDisabled ? 'Gerando' : 'Gerar Imagem'}</button>
    </form>
  );
}

export default PromptForm;
