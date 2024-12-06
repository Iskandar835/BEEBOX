import styled from "styled-components";
import { Title, Subtitle } from "../components/pageStructure/Banner";
// import data from "../data/dataBase.json";
import TheButton from "../components/Button";
import HoneyEffect from "../components/Effect";
import Card from "../components/Card";

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
const StickImg = styled.img`
  position: relative;
  bottom: 90px;
  width: 150px;
`;
const SubtitleContainer = styled.div`
  position: relative;
  bottom: 50px;
`;
const NewSubtitle = styled(Subtitle)`
  display: flex;
  gap: 10px;
  justify-content: center;
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
  gap: 35px;
  margin: 80px 0 0 0;
  padding: 0 35px;
  text-align: center;
`;

const Ingredient = styled.div`
  margin: 70px 0 0 0;
  text-align: center;
  padding: 0 35px;
`;

function HoneysPage() {
  return (
    <Section>
      <TitleContainer>
        <BrandTitle>B E E B O X</BrandTitle>
        <HoneyTitle>Power</HoneyTitle>
      </TitleContainer>
      <CaracteristicsContainer>
        <StickImg src="/assets/POWER-STICK.png" />
        <SubtitleContainer>
          <NewSubtitle>
            Effort Physique<i className="fa-solid fa-bolt"></i>
          </NewSubtitle>
          {/* <p>Disponible immediatement</p> */}
        </SubtitleContainer>
        <EffectContainer>
          <HoneyEffect source={"/assets/POWER-BRAIN.png"} />
          <HoneyEffect source={"/assets/POWER-LIPS.png"} />
          <HoneyEffect source={"/assets/POWER-QUALITY.png"} />
        </EffectContainer>
        <Ingredient>
          <BrandTitle>Ingrédients :</BrandTitle>
          <p>
            miel blanc du Kirzighstan, macabio du pérou, ginseng sibérien,
            gingembre, tribulus terrestris, gelée royale
          </p>
        </Ingredient>
        <BoxContainer>
          <Card />
        </BoxContainer>
        <ContactSection>
          <p>Vous souhaitez passer commande chez nous</p>
          <TheButton content={"Cliquez ici !"} />
        </ContactSection>
      </CaracteristicsContainer>
    </Section>
  );
}
export default HoneysPage;
