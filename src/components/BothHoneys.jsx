import styled from "styled-components";
import Data from "../data/dataBase.json";
import HoneyButton from "./HoneyButton";

const Section = styled.section`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px 0 20px;
  gap: 65px;
  border-radius: 80px 80px 0 0;
  text-align: center;
  background-color: var(--first-bg-color);
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
      <h2>Decouvrez nos miels</h2>
      <Container>
        {Data.honeys.map((honey) => (
          <HoneyButton
            key={honey.id}
            href={`/honeys/${honey.id}`}
            source={honey.stick}
            // Rajouter plus tard "alt"
          />
        ))}
      </Container>
    </Section>
  );
}

export default BothHoneys;
