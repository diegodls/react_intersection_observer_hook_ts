import styled from "styled-components";

import logoVisible from "../../assets/img/drax-visible.jpg";
import logoInvisible from "../../assets/img/drax-invisible.jpg";
import arrow from "../../assets/img/arrow.png";

interface Props {
  isVisible?: boolean;
  isActive?: boolean;
  textAlign?: string;
  textSize?: string;
  onClick?: (e: Event) => void;
}

export const Container = styled.section<Props>`
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${(props) => (props.isVisible ? "#8e5bc7" : "#411474")};
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  transition: background-color 0.5s ease-in-out;
`;

export const TopContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageTopContentContainer = styled.div<Props>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  padding: 4px;
  overflow: hidden;
  background-image: linear-gradient(to bottom right, #937ef3, #d39bc2);
`;

export const ImageTopContent = styled.img<Props>`
  background-image: ${(props) =>
    props.isVisible ? `url(${logoVisible})` : `url(${logoInvisible})`};
  background-color: yellow;
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin: 0 auto;
  border: 0;
`;

export const TopLeft = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopRight = styled.div<Props>`
  width: 100%;
  opacity: ${(props) => (props.isVisible ? "1" : ".5")};
`;

export const ContentContainer = styled.div<Props>`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentLeft = styled.div<Props>`
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: ${(props) => (props.isVisible ? "0" : "25%")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 0.5s ease;
  margin-right: 50px;
`;

export const ContentRight = styled.div<Props>`
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${(props) => (props.isVisible ? "0" : "25%")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 0.5s ease;
`;

export const ImageContent = styled.img.attrs({
  src: arrow,
})``;

export const Text = styled.span<Props>`
  color: ${(props) => (props.isVisible ? "#2f2f2f" : "#f2f2f2")};
  font-size: ${(props) => props.textSize || "48px"};
  transition: 0.5s ease;
  word-wrap: break-word;
  text-align: ${(props) => props.textAlign || "center"};
`;

export const BottomContent = styled.div<Props>`
  margin-top: 30px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: ${(props) => (props.isVisible ? "0" : "-50px")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 0.5s ease;
`;
