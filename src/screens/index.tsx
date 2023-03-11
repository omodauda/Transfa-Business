import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function Demo() {
  const inset = useSafeAreaInsets()
  return (
    <View
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingTop: inset.top, paddingBottom: inset.bottom }}
    >
      <Text>This is top text.</Text>

      <Text>This is bottom text.</Text>
    </View>
  );
}

export default function Screens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Demo' component={Demo} />
    </Stack.Navigator>
  )
}