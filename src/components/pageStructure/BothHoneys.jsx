import styled from "styled-components";
import HoneyButton from "../HoneyButton";

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 150px 20px 0 20px;
  border-radius: 80px 80px 0 0;
  position: relative;
  bottom: 50px;
  background-color: var(--first-bg-color);
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > :nth-child(1) {
    width: 230px;
    height: 230px;
    position: relative;
    z-index: 1;
    bottom: 30px;
    left: 20px;
    background: var(--primary-color);
    box-shadow: 5px 5px 10px #1e1e1e87;
  }
  & > :nth-child(2) {
    position: relative;
    top: 30px;
    right: 20px;
    background: var(--secondary-color);
    filter: blur(3px);
  }
`;
export const Subtitle = styled.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
`;
function BothHoneys() {
  return (
    <Section>
      <Subtitle>Découvrez nos miels</Subtitle>
      <Container>
        <HoneyButton source={"/assets/POWER-STICK.png"} />
        <HoneyButton source={"/assets/LOVER-STICK.png"} />
      </Container>
    </Section>
  );
}

export default BothHoneys;
