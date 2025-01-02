import styled from "styled-components";
import { devices } from "../utils/Breakpoints";
import PropTypes from "prop-types";

const Button = styled.button`
  width: 220px;
  padding: 13px 25px;
  font-weight: 600;
  font-size: 18px;
  color: var(--tertiary-bg-color);
  background: ${({ id }) =>
    id === "1"
      ? "var(--primary-color)"
      : id === "2"
      ? "var(--secondary-color)"
      : "#FFFFFF"};
  border: none;
  border-radius: 8px;
  box-shadow: 0 15px 60px -5px rgba(0, 0, 0, 0.9);
  transition: transform 250ms ease, box-shadow 250ms ease;
  &:active {
    transform: scale(0.95);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }
  @media ${devices.tabsAndDesktop} {
    padding: 15px 28px;
    font-size: 20px;
  }
  @media ${devices.desktop} {
    &:hover {
      transform: scale(0.95);
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.9);
      cursor: pointer;
    }
  }
`;

function TheButton({ onclick, id, content }) {
  return (
    <>
      <Button onClick={onclick} id={id}>
        {content}
      </Button>
    </>
  );
}

TheButton.propTypes = {
  onclick: PropTypes.func,
  id: PropTypes.string,
  content: PropTypes.string,
};

export default TheButton;
