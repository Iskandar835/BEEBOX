import styled from "styled-components";
import { devices } from "../utils/Breakpoints";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Text = styled.p`
  font-size: 10px;
  font-family: var(--title-font-family);
  @media ${devices.tabs} {
    font-size: 13px;
  }
  @media ${devices.desktop} {
    font-size: 15px;
  }
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
