import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import PropTypes from "prop-types";

const Title = styled.p`
  margin: 0;
  font-size: 17px;
  @media ${devices.tabs} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    font-size: 23px;
  }
`;
const Text = styled.p`
  @media ${devices.tabs} {
    font-size: 18px;
  }
  @media ${devices.desktop} {
    font-size: 21px;
  }
`;

function Ingredients({ content }) {
  return (
    <>
      <Title>Ingrédients :</Title>
      <Text>{content}</Text>
    </>
  );
}

Ingredients.propTypes = {
  content: PropTypes.string,
};

export default Ingredients;
