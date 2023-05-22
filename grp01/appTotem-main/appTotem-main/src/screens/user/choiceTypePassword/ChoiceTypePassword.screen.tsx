import { ActivityIndicator, Text } from "react-native/";
import Background from "../../../components/Background/Background";
import Button from "../../../components/Button/Button.screen";
import Header from "../../../components/Header/Header.screen";
import useChoiceController from "../../../controllers/useChoiceController";
import { Container } from "./ChoiceTypePassword.styles";

export default function ChoiceTypePassword() {
  const { choiceType, loading } = useChoiceController();

  // tipo_senha = 0 - gera senha SP
  // tipo_senha = 1 - gera senha SG
  // tipo_senha = 2 - gera senha SE

  if (loading) {
    return (
      <Background>
        <Container>
          <ActivityIndicator />
          <Text style={{ color: "#fff" }}>Carregando..</Text>
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Header tittle="Escolha o tipo de atendimento" />
      <Container>
        <Button
          onPress={() => choiceType("0")}
          text="PRIORITÁRIA"
          buttonColor="#212AFF"
        />

        <Button
          onPress={() => choiceType("1")}
          text="GERAL"
          buttonColor="#FF7A00"
        />

        <Button
          onPress={() => choiceType("2")}
          text="RETIRADA DE EXAMES"
          buttonColor="#cdcdcd"
        />
      </Container>
    </Background>
  );
}
