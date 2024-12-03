import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClienteScreen from './screens/ClienteScreen';
import InicioScreen from './screens/InicioScreen';
import SobreScreen from './screens/SobreScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: 'Tela de Início' }}
        />
        <Stack.Screen
          name="Sobre"
          component={SobreScreen}
          options={{ title: 'Sobre' }}
        />
        <Stack.Screen
          name="Cliente"
          component={ClienteScreen}
          options={{ title: 'Clientes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

