import styled from "styled-components";
import { Title, Subtitle } from "../components/pageStructure/Banner";
// import data from "../data/dataBase.json";
import TheButton from "../components/Button";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0 0;
  background: var(--secondary-bg-color);
`;
const CaracteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--first-bg-color);
  border-radius: 100% 100% 0 0;
`;
const HoneyTitle = styled(Title)`
  color: var(--primary-color);
`;
const StickImg = styled.img`
  width: 100px;
`;
const BrandTitle = styled.p`
  font-size: 20px;
`;
const SubtitleContainer = styled.div`
  width: 100%;
  text-align: left;
`;
const NewSubtitle = styled(Subtitle)`
  color: var(--primary-color);
`;
const EffectContainer = styled.div`
  //   width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const Effect = styled.img`
  width: 65px;
  height: 65px;
`;

function HoneysPage() {
  return (
    <Section>
      <BrandTitle>B E E B O X</BrandTitle>

      <HoneyTitle>Power</HoneyTitle>
      <CaracteristicsContainer>
        <StickImg src="/assets/POWER-STICK.png" />
        <SubtitleContainer>
          <NewSubtitle>AYEZ LE POWER !</NewSubtitle>
        </SubtitleContainer>
        <EffectContainer>
          <Effect src="/assets/POWER-BRAIN.png" />
          <Effect src="/assets/POWER-LIPS.png" />
          <Effect src="/assets/POWER-QUALITY.png" />
        </EffectContainer>
        <TheButton content={"contacter-nous"} />
      </CaracteristicsContainer>
    </Section>
  );
}
export default HoneysPage;
