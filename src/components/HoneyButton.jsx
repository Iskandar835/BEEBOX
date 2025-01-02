import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../utils/Breakpoints";
import PropTypes from "prop-types";

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media ${devices.tabs} {
    width: 240px;
    height: 240px;
  }
  @media ${devices.desktop} {
    width: 280px;
    height: 280px;
    &:hover {
      position: relative;
      z-index: 1;
      transform: scale(1.2);
      box-shadow: 0px 10px 50px #1e1e1e;
    }
  }
`;
const Img = styled.img`
  width: 50%;
`;

function HoneyButton({ href, source, alt }) {
  return (
    <Container to={href}>
      <Img src={source} alt={alt} />
    </Container>
  );
}

HoneyButton.propTypes = {
  href: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
};

export default HoneyButton;
