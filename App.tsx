import React, { useCallback, useMemo } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider, useTheme} from 'react-native-paper';
import { useFonts } from 'expo-font';
import { AppDefaultTheme, AppDarkTheme } from '~config/theme';
import { NavigationContainer } from '@react-navigation/native';
import Screens from '~screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import client, {persistor} from '~graphql/client';

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
    await persistor.restore()
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  function ThemedApp() {
    const scheme = useColorScheme();
    const theme = useMemo(() => scheme === 'light' ? AppDefaultTheme: AppDarkTheme, [scheme])
    const {colors, dark} = useTheme()

    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme} onReady={onLayoutRootView}>
            <StatusBar
              backgroundColor={colors.background}
              barStyle={dark ? 'light-content' : 'dark-content'}
            />
            <Screens />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    )
  }

  return (
    <ApolloProvider client={client}>
      <ThemedApp />
    </ApolloProvider>
  );
}
