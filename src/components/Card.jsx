import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.article`
  width: 310px;
  height: 190px;
  background: var(--secondary-bg-color);
  border-radius: 25px;
`;
const Img = styled.img`
  position: relative;
  bottom: 0px;
  left: 60px;
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
  color: ${({ id }) =>
    id === "1" ? "var(--primary-color)" : "var(--secondary-color)"};
`;
const SubtitleCard = styled.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 500;
`;
const Text = styled.p`
  margin: 10px 0 0 0;
  font-size: 15px;
`;

function Card({ source, id }) {
  return (
    <Container>
      <Img src={source} />
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
  id: PropTypes.string,
};

export default Card;
