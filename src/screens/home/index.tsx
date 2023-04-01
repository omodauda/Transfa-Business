/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import NetworkError from '~components/networkError';
import SafeAreaScreen from '~components/SafeAreaScreen'
import useGetBusiness from '~hooks/api/useGetBusiness'
import { BusinessReviewStatus } from '~__generated__/graphql';
import messaging from '@react-native-firebase/messaging'
import useSaveFcmToken from '~hooks/api/useSaveFcmToken';
import MainView from './mainView';
import PendingAccount from './pendingAccountView'
import ZeroBikeView from './zeroBikeView';

export default function Home() {
  const { loading, data, error, refetch } = useGetBusiness();
  const { saveToken } = useSaveFcmToken();

  useEffect(() => {
    const getFCMPermission = async () => {
      /** register device for remote mesage */
      const permission = await messaging().requestPermission();
      const enabled = permission ===
        messaging.AuthorizationStatus.AUTHORIZED || messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        const token = await messaging().getToken();
        saveToken({token})
      }
    };
    getFCMPermission();
    return messaging().onTokenRefresh(token => {
      saveToken({token})
    })
  }, [])

  function Loader() {
    return (
      <View style={[styles.loaderView]}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  if (error?.networkError?.message === 'Network request failed') {
    return <NetworkError retry={refetch} />;
  }

  // eslint-disable-next-line consistent-return
  function ScreenToRender() {
    if (loading) {
      return <Loader />;
    }
    if (!loading && data?.status === BusinessReviewStatus.Pending) {
      return <PendingAccount />;
    }
    if (
      !loading &&
      data?.status === BusinessReviewStatus.Verified &&
      !!data.riders
    ) {
      return <ZeroBikeView />
    }
    if (
      !loading &&
      data?.status === BusinessReviewStatus.Verified &&
      data.riders
    ) {
      return <MainView />
    }
  }
  
  return (
    <SafeAreaScreen style={{paddingHorizontal: 0}}>
      {ScreenToRender()}
    </SafeAreaScreen>
  )
}

const styles = StyleSheet.create({
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})