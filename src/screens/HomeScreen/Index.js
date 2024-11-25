// src/components/PromptForm.js
import React, { useState } from "react";
import Card from "../../components/Card/Index";
import { CardContainer, MainContainer, Subtitle, Title } from "./styles";
import { usePollinationsImage } from "@pollinations/react";

function PromptForm({ setImage, handleSubmit }) {
  /** States */
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");

  const image = usePollinationsImage(prompt, {
    width: 800,
    height: 600,
    seed: 42,
  });

  /** Functions */
  const handleGenerate = () => {
    if (image) {
      setGeneratedImage(image);
    }
  };

  /** Renders */
  const renderImagePrompt = () => (
    <div>
      <input onChange={(event) => setPrompt(event.target.value)} />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );

  const renderImage = () =>
    generatedImage && <img src={generatedImage} alt="AI Generated" />;

  return (
    <MainContainer>
      <Card>
        <CardContainer>
          <Title>Image generator</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Subtitle>

          {renderImagePrompt()}
          {renderImage()}
        </CardContainer>
      </Card>
    </MainContainer>
  );
}

export default PromptForm;
