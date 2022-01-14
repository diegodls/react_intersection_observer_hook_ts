import { useRef, useState } from "react";

import useOnScreen from "../../hooks/useOnScreen";

import { Button } from "../UIElementsShared/Button";

import * as C from "./styles";

function Component2() {
  const [keepVisible, setKeepVisible] = useState<boolean>(false);

  const elementRef = useRef<HTMLDivElement>(null);

  const isOnScreen = useOnScreen({
    ref: elementRef,
    keepOnScreen: keepVisible,
  });

  return (
    <>
      <C.Container isVisible={isOnScreen} ref={elementRef}>
        <C.TopContainer>
          <C.TopLeft>
            <C.ImageTopContentContainer>
              <C.ImageTopContent isVisible={isOnScreen} />
            </C.ImageTopContentContainer>
          </C.TopLeft>
          <C.TopRight isVisible={isOnScreen}>
            <C.Text>
              {isOnScreen ? "Agora você vê..." : "Agora você não vê..."}
            </C.Text>
          </C.TopRight>
        </C.TopContainer>

        <C.ContentContainer isVisible={isOnScreen}>
          <C.ContentLeft isVisible={isOnScreen}>
            <C.Text textAlign={"right"}>
              Neste exemplo, ao chegar na metade da tela "visível", o Hook
              altera o estado permitindo o uso das animações.
            </C.Text>
          </C.ContentLeft>
          <C.ContentRight isVisible={isOnScreen}>
            <C.ImageContent />
          </C.ContentRight>
        </C.ContentContainer>
        <C.BottomContent isVisible={isOnScreen}>
          <C.Text textAlign={"center"}>
            E também é possível manter o estado do Hook ativo clicando no botão
            abaixo.
          </C.Text>
          <C.Text textSize={"30px"}>(ou deixa-lo ativo por padrão)</C.Text>
          <Button kVisible={keepVisible} setKVisible={setKeepVisible} />
        </C.BottomContent>
      </C.Container>
    </>
  );
}

export { Component2 };
