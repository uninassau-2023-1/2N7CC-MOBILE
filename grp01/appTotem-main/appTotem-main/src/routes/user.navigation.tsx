import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChoiceTypePassword from "../screens/user/choiceTypePassword/ChoiceTypePassword.screen";
import CurrentPassword from "../screens/user/currentPassword/CurrentPassword.screen";

export default function UserNavigation() {
  const User = createNativeStackNavigator();

  return (
    <User.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <User.Screen name="ChoiceTypePassword" component={ChoiceTypePassword} />
      <User.Screen name="CurrentPassword" component={CurrentPassword} />
    </User.Navigator>
  );
}
