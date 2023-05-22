import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/welcome/Welcome.screen";

import UserNavigation from "./user.navigation";
import AdminNavigation from "./admin.navigation";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Welcome" component={Welcome} />
        <Screen name="UserNavigation" component={UserNavigation} />
        <Screen name="AdminNavigation" component={AdminNavigation} />
      </Navigator>
    </NavigationContainer>
  );
}
