import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-Extralight': require('./assets/fonts/GeneralSans-Extralight.otf'),
    'GeneralSans-Light': require('./assets/fonts/GeneralSans-Light.otf'),
    'GeneralSans-Regular': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-Medium': require('./assets/fonts/GeneralSans-Medium.otf'),
    'GeneralSans-Semibold': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-Bold': require('./assets/fonts/GeneralSans-Bold.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={{fontFamily: 'GeneralSans-Regular'}}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
