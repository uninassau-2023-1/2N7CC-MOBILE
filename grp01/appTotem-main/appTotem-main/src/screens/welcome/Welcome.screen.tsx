import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Background from "../../components/Background/Background";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.modalOpened}>
          <Image
            style={styles.imageWelcome}
            source={require("../../assets/imageWelcome.png")}
          />

          <Text style={styles.textWelcome}>Bem vindo!</Text>

          <View style={styles.viewButtons}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserNavigation", {
                  screen: "ChoiceTypePassword",
                })
              }
              style={styles.buttonAtendimento}
            >
              <Text style={styles.txtTouchable}>ATENDIMENTO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AdminNavigation");
              }}
              style={styles.buttonRestrictArea}
            >
              <Text style={styles.txtTouchable}>SISTEMA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOpened: {
    alignItems: "center",
    backgroundColor: "white",
    height: "50%",
    width: "80%",
    borderRadius: 8,
    justifyContent: "space-evenly",
  },
  imageWelcome: {},
  textWelcome: {
    color: "#11A9FF",
    fontSize: 32,
  },
  buttonAtendimento: {
    width: "80%",
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#01D39B",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonRestrictArea: {
    width: "80%",
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11A9FF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewButtons: {
    width: "100%",
    alignItems: "center",
  },
  txtTouchable: {
    color: "white",
    fontSize: 18,
  },
});
