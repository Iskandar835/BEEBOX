import styled from "styled-components";
import TheButton from "../Button";

const FooterSection = styled.footer`
  margin: 200px 0 0 0;
  padding: 80px 30px 30px 30px;
  //   background: linear-gradient(
  //     var(--first-bg-color),
  //     var(--secondary-color),
  //     var(--primary-color)
  //   );
  background: var(--secondary-bg-color);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const FooterTitle = styled.h3`
  font-family: var(--title-font-family);
  font-size: 17px;
  font-weight: 500;
`;
const FooterSubtitle = styled.p`
  font-size: 15px;
  text-align: right;
  font-weight: 300;
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
        <FooterTitle>
          Notre savoir faire et notre expertise nous permettent de vous proposer
          des miels de très bonne qualité
        </FooterTitle>
        <FooterSubtitle>
          N&apos;hésitez pas à nous contacter par Snapchat pour passer commande
          chez nous
        </FooterSubtitle>
      </TextContainer>
      <ButtonContainer>
        <TheButton content={"Cliquez ici !"} />
      </ButtonContainer>
    </FooterSection>
  );
}

export default Footer;
