import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 70px 0 0 0;
  padding: 0 35px;
  text-align: center;
`;
const Title = styled.p`
  margin: 0;
  font-size: 17px;
  @media ${devices.tabs} {
    font-size: 20px;
  }
`;
const Text = styled.p`
  @media ${devices.tabs} {
    font-size: 18px;
  }
`;

function Ingredients({ content }) {
  return (
    <Container>
      <Title>Ingrédients :</Title>
      <Text>{content}</Text>
    </Container>
  );
}

Ingredients.propTypes = {
  content: PropTypes.string,
};

export default Ingredients;
