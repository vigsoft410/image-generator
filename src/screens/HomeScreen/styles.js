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

  background-color: hsl(0, 0%, 10%);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 50vw;
`;

export const Title = styled.span``;

export const Subtitle = styled.span``;
