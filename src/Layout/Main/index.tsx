import * as C from "./styles";

interface Props {
  children: React.ReactNode;
}

function Main({ children }: Props) {
  return <C.Container>{children}</C.Container>;
}

export { Main };
