import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: visibility 500ms;
`;
const ModalOverlay = styled.div`
  opacity: 0;
  position: relative;
  z-index: 15;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  --webkit-backdrop-filter: blur(15px);
  transition: opacity 500ms 200ms ease-in;
`;
const Modal = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 20;
  width: 290px;
  height: 380px;
  background-color: var(--secondary-bg-color);
  border: 3px solid #FFFFFF;
  border-radius: 20px;
  transition opacity 400ms ease-out;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0 15px;
`;
const Icon = styled.i`
  font-size: 20px;
  text-align: right;
`;
const TitleAndImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 17px;
  text-align: center;
`;
const Border = styled.div`
  width: 60%;
  margin: 10px 0 25px 0;
  border: 1px solid #ffffff;
`;
const Img = styled.img`
  width: 68%;
`;

function TheModal() {
  return (
    <ModalContainer>
      <ModalOverlay></ModalOverlay>
      <Modal>
        <ModalContent>
          <Icon className="fa-solid fa-arrow-right-from-bracket"></Icon>
          <TitleAndImg>
            <Title>
              Nos commandes se passent sur Snapchat : ajoutez-nous, et on
              s&apos;occupe de tout !
            </Title>
            <Border></Border>
            <Img src="./assets/snapchat-qrcode.png" alt="" />
          </TitleAndImg>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}

export default TheModal;
