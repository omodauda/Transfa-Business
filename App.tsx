import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useMemo } from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import { useFonts } from 'expo-font';
import { AppDefaultTheme, AppDarkTheme } from '~config/theme'

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

  function ThemedApp() {
    const scheme = useColorScheme();
    const theme = useMemo(() => {
      return scheme === 'light' ? AppDefaultTheme: AppDarkTheme;
    },[scheme])

    return (
      <PaperProvider theme={theme}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Text style={{fontFamily: 'GeneralSans-Regular'}}>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    )
  }

  return (
    <ThemedApp />
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
