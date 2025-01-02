import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import { TitleH1, TitleH2, TitleH3 } from "../utils/Titles";
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
  @media ${devices.tabs} {
    margin: 0 0 150px 0;
  }
`;
const BrandTitle = styled.p`
  margin: 0;
  font-size: 17px;
  @media ${devices.tabs} {
    font-size: 20px;
  }
`;
const Name = styled(TitleH1)`
  color: ${getColorById};
  text-shadow: 3px 3px 5px var(--first-bg-color);
  text-transform: capitalize;
  @media ${devices.tabs} {
    font-size: 40px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${getColorById};
`;
const Subtitle = styled(TitleH2)`
  text-transform: capitalize;
  @media ${devices.tabs} {
    font-size: 33px;
  }
`;
const Icon = styled.i`
  font-size: 30px;
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
  @media ${devices.tabs} {
    margin: 150px 0 0 0;
    gap: 60px;
  }
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
        <HoneyStick source={honey.stick} alt={honey.stickAlt} />
        <SubtitleContainer id={id}>
          <Subtitle>{honey.title}</Subtitle>
          <Icon
            className={
              id === "1" ? "fa-solid fa-bolt" : "fa-solid fa-heart-pulse"
            }
          ></Icon>
        </SubtitleContainer>
        <EffectContainer>
          {honey.effects.images.map((image, index) => (
            <HoneyEffect
              key={index}
              source={image}
              alt={honey.effects.alt[index]}
            />
          ))}
        </EffectContainer>
        <Ingredients content={honey.ingredients.join(", ")} />
        <BoxContainer>
          <Card source={honey.box} alt={honey.boxAlt} id={id} />
        </BoxContainer>
        <ContactSection>
          <TitleH3>Vous souhaitez en savoir plus sur nos produits ?</TitleH3>
          <ModalButton id={id} content={"Cliquez ici !"} />
        </ContactSection>
      </CaracteristicsContainer>
    </Section>
  );
}
export default HoneysPage;
