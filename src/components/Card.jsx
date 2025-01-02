import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import { TitleH3 } from "../utils/Titles";
import PropTypes from "prop-types";

const Container = styled.article`
  width: 310px;
  height: 190px;
  background: var(--secondary-bg-color);
  border-radius: 25px;
  @media ${devices.tabsAndComputer} {
    width: 370px;
    height: 250px;
  }
`;
const Img = styled.img`
  position: relative;
  bottom: 0px;
  left: 60px;
  width: 250px;
  filter: blur(2px);
  @media ${devices.tabsAndComputer} {
    left: 68px;
    top: 20px;
    width: 300px;
  }
`;
const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  bottom: 180px;
  padding: 0 20px;
  text-shadow: 3px 3px 5px var(--first-bg-color);
  @media ${devices.tabsAndComputer} {
    padding: 0 25px;
  }
`;
const TitleCard = styled(TitleH3)`
  margin: 15px 0 50px 0;
  font-size: 17px;
  color: ${({ id }) =>
    id === "1" ? "var(--primary-color)" : "var(--secondary-color)"};
  @media ${devices.tabsAndComputer} {
    font-size: 20px;
  }
`;
const SubtitleCard = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 500;
  @media ${devices.tabsAndComputer} {
    font-size: 32px;
  }
`;
const Text = styled.p`
  margin: 10px 0 0 0;
  font-size: 15px;
  @media ${devices.tabsAndComputer} {
    font-size: 18px;
  }
`;

function Card({ source, alt, id }) {
  return (
    <Container>
      <Img src={source} alt={alt} />
      <TextContainer>
        <TitleCard id={id}>T H E B O X</TitleCard>
        <SubtitleCard>Plus de quantité ?</SubtitleCard>
        <Text>Découvrez nos box x28 sticks !</Text>
      </TextContainer>
    </Container>
  );
}

Card.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
