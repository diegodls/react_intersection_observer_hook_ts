import styled from "styled-components";

interface Props {
  isActive?: boolean;
  onClick: (e: Event) => void;
}

export const Button = styled.button<Props>`
  max-width: 200px;
  width: 200px;
  border-radius: 5px;
  padding: 10px 30px;
  margin: 20px 0px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => (props.isActive ? "#2f2f2f" : "#2f2f2f")};
  border: none;
  background-color: ${(props) => (props.isActive ? "#91ffa0" : "f2f2f2")};
  box-shadow: ${(props) => (props.isActive ? "0 0px 20px #91ffa0" : "none")};
  transition: 0.5s ease;
`;
