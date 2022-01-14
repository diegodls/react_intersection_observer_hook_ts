import { useRef, useState } from "react";

import useOnScreen from "../../hooks/useOnScreen";

import { Button } from "../UIElementsShared/Button";

import * as C from "./styles";

function Component3() {
  const [keepVisible, setKeepVisible] = useState<boolean>(false);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen({
    ref: elementRef,
    keepOnScreen: keepVisible,
  });

  const textRef1 = useRef<HTMLDivElement>(null);
  const textOnScreen1 = useOnScreen({
    ref: elementRef,
    keepOnScreen: keepVisible,
    options: { threshold: 0.5 },
  });

  const textRef2 = useRef<HTMLDivElement>(null);
  const textOnScreen2 = useOnScreen({
    ref: elementRef,
    keepOnScreen: keepVisible,
    options: { threshold: 0.6 },
  });

  const textRef3 = useRef<HTMLDivElement>(null);
  const textOnScreen3 = useOnScreen({
    ref: elementRef,
    keepOnScreen: keepVisible,
    options: { threshold: 0.7 },
  });

  return (
    <>
      <C.Container isVisible={isOnScreen} ref={elementRef}>
        <C.TextContainer isVisible={textOnScreen1} ref={textRef1}>
          <C.Text isVisible={isOnScreen}>
            E É POSSÍVEL ADICIONAR EM VÁRIOS
          </C.Text>
        </C.TextContainer>
        <C.TextContainer isVisible={textOnScreen2} ref={textRef2}>
          <C.Text isVisible={isOnScreen}>ELEMENTOS PARA CONSEGUIR ESSES</C.Text>
        </C.TextContainer>
        <C.TextContainer isVisible={textOnScreen3} ref={textRef3}>
          <C.Text isVisible={isOnScreen}>EFEITOS FODAS</C.Text>
        </C.TextContainer>

        <Button kVisible={keepVisible} setKVisible={setKeepVisible} />
      </C.Container>
    </>
  );
}

export { Component3 };
