import styled from "styled-components";
import { devices } from "../../utils/Breakpoints";
import { TitleH4 } from "../../utils/Titles";
import Data from "../../data/dataBase.json";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ModalOverlay = styled.div`
  position: relative;
  z-index: 15;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  --webkit-backdrop-filter: blur(15px);
`;
const Modal = styled.div`
  position: absolute;
  z-index: 20;
  width: 290px;
  height: 380px;
  background-color: var(--secondary-bg-color);
  border: 3px solid #ffffff;
  border-radius: 20px;
  @media ${devices.desktop} {
    width: 350px;
    height: 460px;
  }
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0 15px;
`;
const Icon = styled.i`
  font-size: 20px;
  text-align: right;
  @media ${devices.desktop} {
    font-size: 23px;
    cursor: pointer;
  }
`;
const TitleAndImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title = styled(TitleH4)`
  @media ${devices.desktop} {
    font-size: 19px;
  }
`;
const Border = styled.div`
  width: 60%;
  margin: 10px 0 25px 0;
  border: 1px solid #ffffff;
`;
const Img = styled.img`
  width: 68%;
`;

function TheModal({ closeModal }) {
  const snapchat = Data.contact;

  return (
    <ModalContainer>
      <ModalOverlay onClick={closeModal}></ModalOverlay>
      <Modal>
        <ModalContent>
          <Icon
            onClick={closeModal}
            className="fa-solid fa-arrow-right-from-bracket"
          ></Icon>
          <TitleAndImg>
            <Title>
              Nos commandes se passent sur Snapchat : ajoutez-nous, et on
              s&apos;occupe de tout !
            </Title>
            <Border></Border>
            <Img src={snapchat[0].qrcode} alt={snapchat[0].alt} />
          </TitleAndImg>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}

TheModal.propTypes = {
  closeModal: PropTypes.func,
};

export default TheModal;
