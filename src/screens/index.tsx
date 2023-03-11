import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

// screens
import Onboarding from './auth/onboarding';

export default function Screens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name='Onboarding' component={Onboarding} />
      </Stack.Group>
    </Stack.Navigator>
  )
}