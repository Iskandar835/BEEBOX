import styled from "styled-components";
import { Title } from "../components/pageStructure/Banner";
import { useParams } from "react-router-dom";
import Data from "../data/dataBase.json";
import HoneyStick from "../components/HoneyStick";
import HoneyEffect from "../components/Effect";
import Ingredients from "../components/Ingredients";
import Card from "../components/Card";
import ModalButton from "../components/ModalButton";

//** This variable is used to change the color depending on the selected honey **
const getColorById = ({ id }) =>
  id === "1" ? "var(--primary-color)" : "var(--secondary-color)";

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
const Name = styled(Title)`
  color: ${getColorById};
  text-shadow: 3px 3px 5px var(--first-bg-color);
  text-transform: capitalize;
`;
const CaracteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--first-bg-color);
  border-top: 5px solid ${getColorById};
  border-radius: 180px 180px 0 0;
`;
const SubtitleContainer = styled.div`
  position: relative;
  bottom: 50px;
`;
const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  color: ${getColorById};
  text-transform: capitalize;
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
  const { id } = useParams();
  const data = Data.honeys;
  const honey = data.find((honey) => honey.id === id);

  return (
    <Section>
      <TitleContainer>
        <BrandTitle>B E E B O X</BrandTitle>
        <Name id={id}>{honey.name}</Name>
      </TitleContainer>
      <CaracteristicsContainer id={id}>
        <HoneyStick source={honey.stick} />
        <SubtitleContainer>
          <Subtitle id={id}>
            {honey.title}
            <i
              className={
                id === "1" ? "fa-solid fa-bolt" : "fa-solid fa-heart-pulse"
              }
            ></i>
          </Subtitle>
        </SubtitleContainer>
        <EffectContainer>
          {honey.effects.map((effect, item) => (
            <HoneyEffect key={item} source={effect} />
          ))}
        </EffectContainer>
        <Ingredients content={honey.ingredients.join(", ")} />
        <BoxContainer>
          <Card source={honey.box} id={id} />
        </BoxContainer>
        <ContactSection>
          <ThirdTitle>
            Vous souhaitez en savoir plus sur nos produits ?
          </ThirdTitle>
          <ModalButton id={id} content={"Cliquez ici !"} />
        </ContactSection>
      </CaracteristicsContainer>
    </Section>
  );
}
export default HoneysPage;
