import styled from "styled-components";
import { devices } from "../../utils/Breakpoints";
import { TitleH3 } from "../../utils/Titles";
import ModalButton from "../ModalButton";
import Copyright from "../Copyright";

const FooterSection = styled.footer`
  margin: 150px 0 0 0;
  padding: 80px 30px 10px 30px;
  text-align: center;
  background: var(--tertiary-bg-color);
  @media ${devices.desktop} {
    margin: 0;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${devices.desktop} {
    gap: 20px;
  }
`;
const Title = styled(TitleH3)`
  @media ${devices.tabs} {
    font-size: 21px;
  }
  @media ${devices.desktop} {
    font-size: 25px;
  }
`;
const Text = styled.p`
  @media ${devices.desktop} {
    font-size: 20px;
  }
`;
const Icon = styled.i`
  margin-top: 10px;
  font-size: 30px;
  @media ${devices.tabs} {
    font-size: 33px;
  }
  @media ${devices.desktop} {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 35px 0;
  @media ${devices.tabsAndDesktop} {
    margin: 35px 0 75px 0;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <TextContainer>
        <Title>
          Découvrez nos miels, 100 % naturels et pleins de saveurs, directement
          issus de nos ruches.
        </Title>
        <Text>
          Commandez facilement via Snapchat en nous contactant directement pour
          une expérience rapide et personnalisée.
        </Text>
        <Icon className="fa-regular fa-circle-down"></Icon>
      </TextContainer>
      <ButtonContainer>
        <ModalButton id={"contact"} content={"Nous contacter"} />
      </ButtonContainer>
      <Copyright />
    </FooterSection>
  );
}

export default Footer;
