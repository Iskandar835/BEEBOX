import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
const HeaderLink = styled.a`
  color: var(--firt-font-color);
  font-size: 13px;
  text-decoration: none;
`;
const HeaderLogo = styled.p`
  font-size: 25px;
  margin: 0;
`;

function Header() {
  return (
    <Container>
      <HeaderLogo>LOGO</HeaderLogo>
      <HeaderLink href="#">Nous Contacter</HeaderLink>
    </Container>
  );
}

export default Header;
