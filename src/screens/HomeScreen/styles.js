import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgb(26, 26, 26);
  background: linear-gradient(
    336deg,
    rgba(26, 26, 26, 1) 0%,
    rgba(106, 30, 85, 1) 100%,
    rgba(106, 30, 85, 1) 100%
  );
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  min-width: 45vw;
  min-height: 70vh;
  gap: 12px;
`;

export const GeneratedImage = styled.img`
  visibility: visible;
  height: 280px;
  width: 200px;

  ${(props) =>
    props.isHidden &&
    `
    visibility: hidden;
    position: absolute;
    height: 0px;
    width: 0px;
  `};
`;
export const Title = styled.span`
  font-size: 32px;
  color: #6a1e55;
`;

export const Subtitle = styled.span``;

export const GenerateButton = styled.span`
  cursor: pointer;

  display: inline-block;
  border-radius: 28px;
  font-family: Arial;
  font-size: 19px;

  width: 120px;

  text-decoration: none;
  background-color: #6a1e55;
  color: #fefefe;

  padding: 16px 31px;
  margin-top: 16px;

  &:hover {
    background-color: #802b68;
    transition: 0.3s;
  }
`;

export const GeneratedImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
