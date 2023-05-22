import { TouchableOpacityProps } from "react-native/types";
import { ButtonContainer, ButtonText } from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps {
  buttonColor?: string;
  text: string;
}

export default function Button({ buttonColor, text, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} propsColor={buttonColor}>
      <ButtonText> {text} </ButtonText>
    </ButtonContainer>
  );
}
