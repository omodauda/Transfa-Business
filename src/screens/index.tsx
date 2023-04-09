import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~types/navigation';
import useAuth from '~hooks/useAuth';

// screens
import Onboarding from './auth/onboarding';
import Login from './auth/login';
import Signup from './auth/signup';
import ForgotPassword from './auth/forgotPassword';
import Verification from './auth/verification';
import ResetPassword from './auth/resetPassword';
import Home from './home';
import ListBike from './bike/listBike';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Screens() {
  const { isLoggedIn } = useAuth();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        !isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={Signup} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Verification' component={Verification} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListBike" component={ListBike} />
          </Stack.Group>
        )
      }
    </Stack.Navigator>
  )
}