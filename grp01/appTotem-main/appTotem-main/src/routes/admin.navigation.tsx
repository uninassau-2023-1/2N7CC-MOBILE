import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/admin/login/login.screen";
import AdminHome from "../screens/admin/adminHome/adminHome.screen";

export default function AdminNavigation() {
  const Admin = createNativeStackNavigator();

  return (
    <Admin.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Admin.Screen name="Login" component={Login} />
      <Admin.Screen name="AdminHome" component={AdminHome} />
    </Admin.Navigator>
  );
}
