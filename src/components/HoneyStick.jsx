import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import PropTypes from "prop-types";

const Image = styled.img`
  position: relative;
  bottom: 90px;
  width: 150px;
  @media ${devices.tabs} {
    bottom: 100px;
    width: 170px;
  }
  @media ${devices.desktop} {
    bottom: 120px;
    width: 200px;
  }
`;

function HoneyStick({ source, alt }) {
  return (
    <>
      <Image src={source} alt={alt} />
    </>
  );
}

HoneyStick.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};

export default HoneyStick;
