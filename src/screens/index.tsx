import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~types/navigation';

// screens
import Onboarding from './auth/onboarding';
import Login from './auth/login';
import Signup from './auth/signup';
import ForgotPassword from './auth/forgotPassword';
import Verification from './auth/verification';
import ResetPassword from './auth/resetPassword';
import Home from './home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Screens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={Signup} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  )
}