import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~types/navigation';

// screens
import Onboarding from './auth/onboarding';
import Login from './auth/login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Screens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  )
}