import { TittleText } from "./Tittle.styles";

interface TittleProps {
  tittle: string;
}
export default function Tittle({ tittle }: TittleProps) {
  return <TittleText> {tittle} </TittleText>;
}
