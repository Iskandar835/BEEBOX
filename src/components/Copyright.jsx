import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 80px 0 0 0;
`;
const Text = styled.p`
  font-size: 10px;
  font-family: var(--title-font-family);
`;

function Copyright() {
  return (
    <Container>
      <i className="fa-regular fa-copyright"></i>
      <Text>2024 BEEBOX, Inc. Conditions & Confidentialité</Text>
    </Container>
  );
}

export default Copyright;
