import styled from "styled-components";

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
    background: url("./assets/Doodleitems.png");
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
export const Title = styled.h1`
  margin: 0;
  font-family: var(--title-font-family);
  font-size: 36px;
  font-weight: 600;
  text-shadow: 5px 5px 5px #000000;
`;

function Banner() {
  return (
    <Container>
      <TextContainer>
        <Title>Bienvenue</Title>
      </TextContainer>
    </Container>
  );
}

export default Banner;
