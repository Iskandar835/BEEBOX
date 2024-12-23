import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 70px 0 0 0;
  padding: 0 35px;
  text-align: center;
`;
const Title = styled.p`
  margin: 0;
  font-size: 17px;
`;

function Ingredients({ content }) {
  return (
    <Container>
      <Title>Ingrédients :</Title>
      <p>{content}</p>
    </Container>
  );
}

Ingredients.propTypes = {
  content: PropTypes.string,
};

export default Ingredients;
