import { ArrowLeft } from "phosphor-react-native";
import { ContainerRow, TittleHeader } from "./Header.styles";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native/";

interface HeaderProps {
  tittle: string;
}

export default function Header({ tittle }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <ContainerRow>
      <Pressable
        style={{ alignItems: "flex-start" }}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft color="white" size={32} />
      </Pressable>
      <TittleHeader>{tittle}</TittleHeader>
      <View />
    </ContainerRow>
  );
}
