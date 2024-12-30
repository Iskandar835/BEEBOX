import styled from "styled-components";
import DoodleItems from "/assets/Doodleitems.png";
import { TitleH1 } from "../utils/Titles";

const Container = styled.section`
  position: relative;
  padding: 100px 0 150px 0;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${DoodleItems});
  }
`;
const TextContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px 20px;
  background-color: var(--first-bg-color);
  border-radius: 0 35px 0 35px;
  box-shadow: 5px 5px 5px #000000;
`;

function Banner() {
  return (
    <Container>
      <TextContainer>
        <TitleH1>Bienvenue</TitleH1>
      </TextContainer>
    </Container>
  );
}

export default Banner;
