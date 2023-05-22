import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { Alert } from "react-native/";
import { useState } from "react";

export default function ChoiceController() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function choiceType(type: string) {
    setLoading(true);
    api
      .post("/gerar_senha", {
        tipo_senha: type,
      })
      .then((response) => {
        setLoading(false);
        navigation.navigate("CurrentPassword", {
          password: response.data.senha,
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert("Erro", "Não foi possível gerar a senha");
      });
  }

  return {
    choiceType,
    loading,
  };
}
