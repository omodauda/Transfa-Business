/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import NetworkError from '~components/networkError';
import SafeAreaScreen from '~components/SafeAreaScreen'
import useGetBusiness from '~hooks/api/useGetBusiness'
import { BusinessReviewStatus } from '~__generated__/graphql';
import MainView from './mainView';
import PendingAccount from './pendingAccountView'
import ZeroBikeView from './zeroBikeView';

export default function Home() {
  const { loading, data, error, refetch } = useGetBusiness();

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