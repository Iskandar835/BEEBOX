import styled from "styled-components";
import { TitleH4 } from "../../utils/Titles";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
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
  transition: display 500ms 200ms ease-in;
`;
const Modal = styled.div`
  position: absolute;
  z-index: 20;
  width: 290px;
  height: 380px;
  background-color: var(--secondary-bg-color);
  border: 3px solid #ffffff;
  border-radius: 20px;
  transition: display 400ms ease-out;
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

function TheModal({ closeModal }) {
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
            <TitleH4>
              Nos commandes se passent sur Snapchat : ajoutez-nous, et on
              s&apos;occupe de tout !
            </TitleH4>
            <Border></Border>
            <Img src="../assets/snapchat-qrcode.png" alt="Snapchat qr-code" />
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
