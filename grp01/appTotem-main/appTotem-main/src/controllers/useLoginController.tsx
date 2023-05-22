import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native/";
import { useState } from "react";

export default function useLoginController() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function verifyUser() {
    if (email.toLocaleLowerCase().trim() === "admin" && password === "admin") {
      navigation.navigate("AdminHome");
    } else {
      Alert.alert("Dados incorretos", "Email ou senha incorretos");
    }
  }

  return {
    verifyUser,
    setPassword,
    setEmail,
  };
}
