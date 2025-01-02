import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import Banner from "../components/Banner";
import BothHoneys from "../components/BothHoneys";

const Main = styled.main`
  @media ${devices.desktop} {
    box-shadow: 0 10px 40px var(--tertiary-bg-color);
  }
`;

function Homepage() {
  return (
    <Main>
      <Banner />
      <BothHoneys />
    </Main>
  );
}

export default Homepage;
