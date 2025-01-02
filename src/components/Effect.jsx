import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  box-shadow: 1px 1px 16px 3px #ffffffab;
  @media ${devices.tabs} {
    width: 80px;
    height: 80px;
  }
`;
const Img = styled.img`
  width: 100%;
`;

function HoneyEffect({ source, alt }) {
  return (
    <Container>
      <Img src={source} alt={alt} />
    </Container>
  );
}

HoneyEffect.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};

export default HoneyEffect;
