import { StyleSheet, Text, View } from 'react-native';
import Senha from './src/telas/Senha';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator styles={styles.container} initialRouteName="Senha" >
          <Stack.Screen options={{headerShown: false}} name="Senha" component={Senha} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
});

export default App