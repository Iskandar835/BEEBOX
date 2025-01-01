import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  position: relative;
  bottom: 90px;
  width: 150px;
`;

function HoneyStick({ source, alt }) {
  return (
    <div>
      <Image src={source} alt={alt} />
    </div>
  );
}

HoneyStick.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};

export default HoneyStick;
