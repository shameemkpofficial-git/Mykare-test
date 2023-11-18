import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import Registration from '../screens/registration';
import Dashboard from '../screens/dashboard';

const Stack = createNativeStackNavigator();

const AppNav = () => (
  <Stack.Navigator>
    <Stack.Screen component={Login} name="Login" options={{ headerShown: false }} />
    <Stack.Screen component={Registration} name="Registration" options={{ headerShown: false }} />
    <Stack.Screen component={Dashboard} name="Dashboard" options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
}
