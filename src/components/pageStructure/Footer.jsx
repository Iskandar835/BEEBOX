import styled from "styled-components";
import TheButton from "../Button";
import { ThirdTitle } from "../../pages/Honeys";
import Copyright from "../Copyright";

const FooterSection = styled.footer`
  margin: 150px 0 0 0;
  padding: 80px 30px 10px 30px;
  text-align: center;
  background: var(--tertiary-bg-color);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const FooterSubtitle = styled.p`
  font-size: 15px;
  font-weight: 300;
`;
const ArrowDown = styled.i`
  margin-top: 10px;
  font-size: 30px;
`;
const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 35px 0;
`;

function Footer() {
  return (
    <FooterSection>
      <TextContainer>
        <ThirdTitle>
          Découvrez nos miels, 100 % naturels et pleins de saveurs, directement
          issus de nos ruches.
        </ThirdTitle>
        <FooterSubtitle>
          Commandez facilement via Snapchat en nous contactant directement pour
          une expérience rapide et personnalisée.
        </FooterSubtitle>
        <ArrowDown className="fa-regular fa-circle-down"></ArrowDown>
      </TextContainer>
      <ButtonContainer>
        <TheButton id={"contact"} content={"Nous contacter"} />
      </ButtonContainer>
      <Copyright />
    </FooterSection>
  );
}

export default Footer;
