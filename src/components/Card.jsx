import styled from "styled-components";
// import { BrandTitle } from "../pages/Honeys";

const Container = styled.div`
  width: 310px;
  height: 190px;
  background: var(--secondary-bg-color);
  border-radius: 25px;
`;
const Img = styled.img`
  position: relative;
  left: 60px;
  bottom: 0px;
  width: 250px;
  filter: blur(2px);
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  bottom: 180px;
  padding: 0 20px;
  text-shadow: 3px 3px 5px var(--first-bg-color);
`;
const TitleCard = styled.p`
  margin-bottom: 50px;
  color: var(--primary-color);
`;
const SubtitleCard = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin: 0;
`;

const Text = styled.p`
  font-size: 15px;
  margin: 10px 0 0 0;
`;
function Card() {
  return (
    <Container>
      <Img src="/assets/POWER-BOX.png" />
      <TextContainer>
        <TitleCard>T H E B O X</TitleCard>
        <SubtitleCard>Plus de quantité ?</SubtitleCard>
        <Text>Découvrez nos box x28 sticks !</Text>
      </TextContainer>
    </Container>
  );
}

export default Card;
