import React, { useState, useEffect } from "react";
import { usePollinationsImage } from "@pollinations/react";
import {
  CardContainer,
  GenerateButton,
  GeneratedImage,
  GeneratedImagesContainer,
  MainContainer,
  Subtitle,
  Title,
} from "./styles";
import Card from "../../components/Card/Index";
import EmptyImagePreset from "../../components/EmptyImagePreset/Index";

function PromptForm() {
  /** States */
  const [prompt, setPrompt] = useState("");
  const [truePrompt, setTruePrompt] = useState("");
  const [images, setImages] = useState([
    { index: 0, image: "", isLoaded: false },
    { index: 1, image: "", isLoaded: false },
    { index: 2, image: "", isLoaded: false },
  ]);
  const [generateImages, setGenerateImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /** Hooks for generating images */
  const image1 = usePollinationsImage(generateImages ? truePrompt : null, {
    width: 600,
    height: 800,
    seed: 42,
  });
  const image2 = usePollinationsImage(generateImages ? truePrompt : null, {
    width: 600,
    height: 800,
    seed: 43,
  });
  const image3 = usePollinationsImage(generateImages ? truePrompt : null, {
    width: 600,
    height: 800,
    seed: 44,
  });

  /** Effect to update images when new ones are generated */
  useEffect(() => {
    if (generateImages) {
      setImages((prev) => [
        { index: 0, image: image1 || "", isLoaded: prev[0].isLoaded },
        { index: 1, image: image2 || "", isLoaded: prev[1].isLoaded },
        { index: 2, image: image3 || "", isLoaded: prev[2].isLoaded },
      ]);
    }
  }, [image1, image2, image3, generateImages]);

  /** Handlers */
  const handleGenerate = () => {
    // All this condition because pollinations only use hooks to make the requisiton :(
    if (prompt.length > 3) {
      setTruePrompt(prompt)
      setIsLoading(true)
      setGenerateImages(true); // Trigger image generation
    }
  };

  /** Renders */
  const renderImagePrompt = () => (
    <div className="form__group field">
      <input
        placeholder="Describe your image..."
        name="prompt"
        id="prompt"
        required
        className="form__field"
        onChange={(event) => setPrompt(event.target.value)}
        style={{ color: "#1a1a1a" }}
        value={prompt}
        disabled={isLoading}
      />
      <label htmlFor="prompt" className="form__label">
        Prompt
      </label>
      <GenerateButton onClick={handleGenerate}>{isLoading ? 'Generating...' : 'Generate'}</GenerateButton>
    </div>
  );

  const renderEmptyImage = (key) => <EmptyImagePreset key={key} />;

  const handleOnLoad = (src) => {
    const imgIndex = images.findIndex((img) => img.image === src);
    if (imgIndex !== -1) {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[imgIndex] = { ...newImages[imgIndex], isLoaded: true };

        if (newImages.every((val) => val.isLoaded)) {
          setIsLoading(false)
        }

        return newImages;
      });
    }
  };

  const renderGeneratedImages = () => {
    return images.map((value) => {
      return (
        <React.Fragment key={value.index}>
          {value.isLoaded === false ? renderEmptyImage(value.index) : null}
          <GeneratedImage
            onLoad={(event) => handleOnLoad(event.target.src)}
            onError={(err) => console.error("Unexpected error at trying to load image: ", err)}
            alt=""
            src={value.image}
            isHidden={!value.isLoaded}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <MainContainer>
      <Card>
        <CardContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Title className="lato-black">Image generator</Title>
            <Subtitle>
              Unleash Creativity: Transform Words into Stunning Visuals with AI
            </Subtitle>
          </div>
          {renderImagePrompt()}
          <GeneratedImagesContainer>
            {renderGeneratedImages()}
          </GeneratedImagesContainer>
        </CardContainer>
      </Card>
    </MainContainer>
  );
}

export default PromptForm;
