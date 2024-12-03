import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  all: unset;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80% 50% 100% 45%/50% 35% 65% 65%;
  cursor: pointer;
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
