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

const Main = styled.main`
  padding: 100px 0 0 0;
  background: var(--secondary-bg-color);
`;
const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 120px 0;
  @media ${devices.tabs} {
    margin: 0 0 150px 0;
  }
  @media ${devices.desktop} {
    margin: 0 0 180px 0;
  }
`;
const BrandTitle = styled.p`
  margin: 0;
  font-size: 17px;
  @media ${devices.tabs} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    font-size: 23px;
  }
`;
const Name = styled(TitleH1)`
  color: ${getColorById};
  text-shadow: 3px 3px 5px var(--first-bg-color);
  text-transform: capitalize;
  @media ${devices.tabs} {
    font-size: 40px;
  }
  @media ${devices.desktop} {
    font-size: 45px;
  }
`;
const CaracteristicsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--first-bg-color);
  border-top: 5px solid ${getColorById};
  border-radius: 180px 180px 0 0;
  @media ${devices.desktop} {
    padding: 0 50px 180px 50px;
  }
  @media ${devices.XlDesktop} {
    border-radius: 180px;
    margin-bottom: 150px;
    border: 5px solid ${getColorById};
  }
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
  @media ${devices.desktop} {
    font-size: 38px;
  }
`;
const Icon = styled.i`
  font-size: 30px;
  @media ${devices.desktop} {
    font-size: 35px;
  }
`;
const EffectContainer = styled.div`
  display: flex;
  gap: 35px;
  @media ${devices.desktop} {
    gap: 55px;
    margin: 35px 0 0 0;
  }
`;
const IngredientsContainer = styled.div`
  margin: 70px 0 0 0;
  padding: 0 35px;
  text-align: center;
  @media ${devices.desktop} {
    margin: 100px 0 0 0;
    padding: 0 300px;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  margin: 120px 0 0 0;
  padding: 0 35px;
  text-align: center;
  @media ${devices.tabs} {
    gap: 60px;
  }
  @media ${devices.desktop} {
    margin: 0;
    justify-content: center;
  }
`;
const CardAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0 0;
  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    gap: 100px;
    margin: 150px 0 0 0;
  }
`;

function HoneysPage() {
  const { id } = useParams();
  const data = Data.honeys;
  const honey = data.find((honey) => honey.id === id);

  return (
    <Main>
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
        <IngredientsContainer>
          <Ingredients content={honey.ingredients.join(", ")} />
        </IngredientsContainer>
        <CardAndButton>
          <Card
            source={honey.box}
            alt={honey.boxAlt}
            id={id}
            title={"T H E B O X"}
            subtitle={"Plus de quantité ?"}
            text={"Découvrez nos box x28 sticks !"}
          />
          <ContactContainer>
            <TitleH3>Vous souhaitez en savoir plus sur nos produits ?</TitleH3>
            <ModalButton id={id} content={"Cliquez ici !"} />
          </ContactContainer>
        </CardAndButton>
      </CaracteristicsContainer>
    </Main>
  );
}
export default HoneysPage;
