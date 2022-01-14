import styled from "styled-components";

interface Props {
  isVisible?: boolean;
  isActive?: boolean;
  textAlign?: string;
  textSize?: string;
  light?: boolean;
  dark?: boolean;
  blue?: boolean;
  green?: boolean;
  onClick?: (e: Event) => void;
}

export const Container = styled.section<Props>`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#ff008e, #ffcd1e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  transition: background-color 0.5s ease;
  
`;

export const TextContainer = styled.section<Props>`
  bottom: ${(props) => (props.isVisible ? "0px" : "-250px")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 0.5s ease;
  margin: 50px 0;
  position: relative;
`;

export const Text = styled.span<Props>`
  color: #f2f2f2;
  font-size: ${(props) => props.textSize || "48px"};
  transition: 0.5s ease;
  word-wrap: break-word;
  text-align: ${(props) => props.textAlign || "center"};
`;

export const Button = styled.button<Props>`
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin: 20px 0px;
  cursor: pointer;
  font-weight: bold;

  ${({ light, dark, blue, green }) => {
    switch (true) {
      case light:
        return `background-color : white`;
      case dark:
        return `background-color : black`;
      case blue:
        return `background-color : blue`;
      case green:
        return `background-color : green`;
    }
  }}
`;
