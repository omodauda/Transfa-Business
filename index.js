import {registerRootComponent} from 'expo';
import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import * as Linking from 'expo-linking';
import App from './App';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  const {notification, data} = remoteMessage;
  // console.log('background.notify', remoteMessage);
  notifee.onBackgroundEvent(async () =>
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
    }),
  );
});

notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification} = detail;
  // console.log('background event', notification);
  if (type === EventType.PRESS) {
    if (notification?.data?.link) {
      const link = notification?.data?.link;
      const validLink = await Linking.canOpenURL(link);
      // console.log('isValidLink', validLink);
      if (validLink) {
        Linking.openURL(link);
      }
    }
  }
});

// function HeadlessCheck({isHeadless}) {
//   console.log(isHeadless);
//   if (isHeadless) {
//     return null;
//   }
//     // eslint-disable-next-line react/jsx-filename-extension
//     return <App />;

// }

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
