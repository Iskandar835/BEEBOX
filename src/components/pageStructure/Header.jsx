import styled from "styled-components";
import { devices } from "../../utils/Breakpoints";
import { Link } from "react-router-dom";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: var(--first-bg-color);
  box-shadow: 0 5px 10px var(--tertiary-bg-color);
  @media ${devices.desktop} {
    padding: 20px 40px;
  }
`;
const HeaderLogo = styled(Link)`
  margin: 0;
  color: var(--firt-font-color);
  font-size: 25px;
  text-decoration: none;
  @media ${devices.tabs} {
    font-size: 29px;
  }
  @media ${devices.desktop} {
    font-size: 33px;
  }
`;
const HeaderLink = styled.a`
  color: var(--firt-font-color);
  font-size: 15px;
  text-decoration: none;
  @media ${devices.tabs} {
    font-size: 18px;
  }
  @media ${devices.desktop} {
    font-size: 20px;
  }
`;

function Header() {
  return (
    <Container>
      <HeaderLogo to={"/BEEBOX"}>BEEBOX</HeaderLogo>
      <HeaderLink href="#contact">Contact</HeaderLink>
    </Container>
  );
}

export default Header;
