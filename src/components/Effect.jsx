import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 72px;
  height: 72px;
  box-shadow: 1px 1px 16px 3px #ffffffab;
  border-radius: 50px;
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
