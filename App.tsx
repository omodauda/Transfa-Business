/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useColorScheme, StatusBar, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider, useTheme} from 'react-native-paper';
import { useFonts } from 'expo-font';
import { AppDefaultTheme, AppDarkTheme } from '~config/theme';
import { NavigationContainer } from '@react-navigation/native';
import Screens from '~screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import client, { persistor } from '~graphql/client';
import FlashMessage from 'react-native-flash-message';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import messaging, {FirebaseMessagingTypes } from '@react-native-firebase/messaging';

SplashScreen.preventAutoHideAsync();

const createChannels = async () => {
  const channel = await notifee.createChannel({
    id: 'default',
    vibration: true,
    name: 'Default Channel'
  })
  return channel
}

async function requestUserPermission() {
  const settings = await notifee.requestPermission();
  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    await createChannels()
  }
}

const onMessageHandler = (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
  const { notification, data } = remoteMessage;
  notifee.displayNotification({
    title: `<p style="color: #212121; font-size: 15px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">${notification?.title}</p>`,
    body: `<p style="color: #212121; font-size: 13px; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">${notification?.body}</p>`,
    android: {
      largeIcon:
        'https://res.cloudinary.com/omodauda/image/upload/v1674060463/App_icon_ghpctd.png',
      channelId: 'default',
    },
    data,
  });
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-Extralight': require('./assets/fonts/GeneralSans-Extralight.otf'),
    'GeneralSans-Light': require('./assets/fonts/GeneralSans-Light.otf'),
    'GeneralSans-Regular': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-Medium': require('./assets/fonts/GeneralSans-Medium.otf'),
    'GeneralSans-Semibold': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-Bold': require('./assets/fonts/GeneralSans-Bold.otf'),
  })
  const [loading, setLoading] = useState(true)

  const onLayoutRootView = useCallback(async () => {
    await persistor.restore()
    setLoading(false);
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  useEffect(() => {
    requestUserPermission();
    const messageSubscription = messaging().onMessage(onMessageHandler);
    return () => {
      messageSubscription();
    }
  }, [])

  if (!fontsLoaded && loading) {
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
            <FlashMessage
              position="top"
              duration={3000}
              floating
              style={[styles.card, {backgroundColor: colors.primary}]}
              titleStyle={[styles.title, {color: colors.surface}]}
              textStyle={[styles.description, {color: colors.surface}]}
            />
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

const styles = StyleSheet.create({
  card: {
    paddingVertical: 17,
    paddingHorizontal: 24,
    borderRadius: 8
  },
   title: {
    textAlign: 'center',
    marginBottom: 4,
    fontFamily: 'GeneralSans-Medium',
    fontWeight: "500",
    fontSize: 20
  },
  description: {
    textAlign: 'center',
    fontFamily: 'GeneralSans-Regular',
    fontWeight: '400',
    fontSize: 14
  },
})
