import { useRoute } from "@react-navigation/native";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Alert } from "react-native/";

interface TypePassword {
  password?: string;
}

interface dataPasswordProps {
  Data_Hora_Atendimento: string;
  Data_Hora_Emissão: string;
  Guichê: string;
  Senha: string;
  Tipo_Senha: string;
}

export default function currentPasswordController() {
  const route = useRoute();

  const { password } = route.params as TypePassword;
  const [loading, setLoading] = useState(false);
  const [allPasswords, setAllPasswords] = useState<dataPasswordProps[]>();

  function handleAllPassword() {
    setLoading(true);
    api
      .get("/ultimas_senhas")
      .then((response) => {
        setAllPasswords(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert("Erro", "Ocorreu um erro ao carregar as senhas");
      });
  }

  useEffect(() => {
    handleAllPassword();
  }, []);

  return {
    handleAllPassword,
    password,
    allPasswords,
    loading,
  };
}
