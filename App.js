import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from './screens/Login';
import RegisterComponent from './screens/Registro';
import AgregarContacto from './screens/Contactos';
import VerContactos from './screens/VerContactos';
const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginComponent} />
        <Stack.Screen name="Registro" component={RegisterComponent} />
        <Stack.Screen name="Contactos" component={AgregarContacto} />
        <Stack.Screen name="verContactos" component={VerContactos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
