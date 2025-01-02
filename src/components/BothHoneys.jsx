import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import { TitleH2 } from "../utils/Titles";
import Data from "../data/dataBase.json";
import HoneyButton from "./HoneyButton";

const Section = styled.section`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px 0 20px;
  gap: 75px;
  border-radius: 80px 80px 0 0;
  text-align: center;
  background-color: var(--first-bg-color);
  @media ${devices.tabs} {
    padding: 80px 20px 0 20px;
  }
  @media ${devices.desktop} {
    bottom: 0;
    padding: 130px 20px 200px 20px;
    gap: 90px;
    border-radius: 0;
  }
`;
const Title = styled(TitleH2)`
  font-size: 20px;
  @media ${devices.tabs} {
    font-size: 25px;
  }
  @media ${devices.desktop} {
    font-size: 30px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > :nth-child(1) {
    background: var(--primary-color);
    &:active {
      box-shadow: 5px 5px 10px #1e1e1e87;
    }
  }
  & > :nth-child(2) {
    background: var(--secondary-color);
    &:active {
      box-shadow: -7px -5px 10px #1e1e1e87;
    }
  }
`;

function BothHoneys() {
  return (
    <Section>
      <Title>Decouvrez nos miels</Title>
      <Container>
        {Data.honeys.map((honey) => (
          <HoneyButton
            key={honey.id}
            href={`/honeys/${honey.id}`}
            source={honey.stick}
            alt={honey.stickAlt}
          />
        ))}
      </Container>
    </Section>
  );
}

export default BothHoneys;
