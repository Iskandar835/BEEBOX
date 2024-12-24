import styled from "styled-components";
import { Title } from "../components/pageStructure/Banner";
import TheButton from "../components/Button";
import HoneyEffect from "../components/Effect";
import Card from "../components/Card";
import HoneyStick from "../components/HoneyStick";
import Ingredients from "../components/Ingredients";

const Section = styled.section`
  padding: 100px 0 0 0;
  background: var(--secondary-bg-color);
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 120px 0;
`;
const BrandTitle = styled.p`
  margin: 0;
  font-size: 17px;
`;
const HoneyTitle = styled(Title)`
  color: var(--primary-color);
  text-shadow: 3px 3px 5px var(--first-bg-color);
`;
const CaracteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--first-bg-color);
  border-radius: 180px 180px 0 0;
`;
const SubtitleContainer = styled.div`
  position: relative;
  bottom: 50px;
`;
const NewSubtitle = styled.h2`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  color: var(--primary-color);
`;
const EffectContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 35px;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
`;
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  margin: 120px 0 0 0;
  padding: 0 35px;
  text-align: center;
`;
export const ThirdTitle = styled.h3`
  margin: 0;
  font-family: var(--title-font-family);
  font-size: 17px;
  font-weight: 500;
`;

function HoneysPage() {
  return (
    <Section>
      <TitleContainer>
        <BrandTitle>B E E B O X</BrandTitle>
        <HoneyTitle>Power</HoneyTitle>
      </TitleContainer>
      <CaracteristicsContainer>
        <HoneyStick source={"/assets/POWER-STICK.png"} />
        <SubtitleContainer>
          <NewSubtitle>
            Effort Physique<i className="fa-solid fa-bolt"></i>
          </NewSubtitle>
        </SubtitleContainer>
        <EffectContainer>
          <HoneyEffect source={"/assets/POWER-BRAIN.png"} />
          <HoneyEffect source={"/assets/POWER-LIPS.png"} />
          <HoneyEffect source={"/assets/POWER-QUALITY.png"} />
        </EffectContainer>
        <Ingredients
          content={
            "miel blanc du Kirzighstan, macabio du pérou, ginseng sibérien, gingembre, tribulus terrestris, gelée royale"
          }
        />
        <BoxContainer>
          <Card source={"/assets/POWER-BOX.png"} />
        </BoxContainer>
        <ContactSection>
          <ThirdTitle>
            Vous souhaitez en savoir plus sur nos produits ?
          </ThirdTitle>
          <TheButton content={"Cliquez ici !"} />
        </ContactSection>
      </CaracteristicsContainer>
    </Section>
  );
}
export default HoneysPage;
