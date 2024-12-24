import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  all: unset;
  width: 200px;
  height: 200px;
  border: 3px solid #ffffff;
  border-radius: 80% 50% 100% 45%/50% 35% 65% 65%;
  cursor: pointer;
  transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
  &:active {
    position: relative;
    z-index: 1;
    transform: scale(1.2);
  }
`;
const ButtonImg = styled.img`
  width: 50%;
`;

function HoneyButton({ onclick, source }) {
  return (
    <Button onClick={onclick}>
      <ButtonImg src={source} />
    </Button>
  );
}

HoneyButton.propTypes = {
  onclick: PropTypes.func,
  source: PropTypes.string,
};

export default HoneyButton;
