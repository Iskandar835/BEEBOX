import { useState } from "react";
import TheButton from "./Button";
import { createPortal } from "react-dom";
import TheModal from "./pageStructure/Modal";
import PropTypes from "prop-types";

function ModalButton({ id, content }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TheButton onclick={() => setShowModal(true)} id={id} content={content} />
      {showModal &&
        createPortal(
          <TheModal closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

ModalButton.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
};

export default ModalButton;
