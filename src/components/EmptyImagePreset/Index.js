// src/App.js
import React from "react";
import { MainContainer } from "./Styles";
import { RiImage2Fill } from "@remixicon/react";

const EmptyImagePreset = ({ children }) => {
  return (
    <MainContainer>
      <RiImage2Fill size={36} color="white" className="ri-image-fill" />
    </MainContainer>
  );
};

export default EmptyImagePreset;
