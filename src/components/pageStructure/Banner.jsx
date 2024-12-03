import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 100px 0 0 0;
`;
const Tilte = styled.h1`
  margin: 0;
  font-family: var(--title-font-family);
  font-size: 36px;
  font-weight: 600;
`;
const Subtitle = styled.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
`;

function Banner() {
  return (
    <Container>
      <Tilte>Bienvenue</Tilte>
      <Subtitle>Découvrez nos miels</Subtitle>
    </Container>
  );
}

export default Banner;
