import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { Alert } from "react-native/";
import { useState } from "react";

export default function useAdminController() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function nextPassword() {
    setLoading(true);
    api
      .get("/chamar_senha")
      .then((response) => {
        setLoading(false);
        console.log(response.data[0].ticket_number);
        Alert.alert(
          "Senha",
          `A próxima senha é: ${response.data[0].ticket_number}`
        );
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert("Erro", "Não foi possível gerar a próxima senha.");
      });
  }

  return {
    nextPassword,
    loading,
  };
}
