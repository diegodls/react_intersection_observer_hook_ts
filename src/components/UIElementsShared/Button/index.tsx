import * as C from "./styles";

interface ButtonProps {
  kVisible?: boolean;
  setKVisible?: (value: boolean | ((prev: boolean) => boolean)) => void;
}

function Button({ kVisible, setKVisible }: ButtonProps) {
  function setState() {
    if (setKVisible) setKVisible((prev: boolean) => !prev);
  }
  return (
    <>
      <C.Button
        isActive={kVisible}
        onClick={() => {
          setState();
        }}
      >
        Manter na tela: {kVisible ? "ON" : "OFF"}
      </C.Button>
    </>
  );
}

export { Button };
