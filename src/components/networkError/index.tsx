/* eslint-disable @typescript-eslint/no-use-before-define */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { useTheme, Text } from 'react-native-paper';
import NetworkErrorSvg from '~components/svg/networkError';
import ReloadSvg from '~components/svg/reload';

interface Props {
  retry: () => void;
}

export default function NetworkError({retry}: Props) {
  const {colors} = useTheme();
  return (
    <View style={styles.errorView}>
      <NetworkErrorSvg />
      <Text
        variant="bodyMedium"
        style={[styles.text, { color: colors.onBackground }]}
      >
        Poor connection! please check your network and try again
      </Text>
      <TouchableOpacity onPress={() => retry()}>
        <View style={styles.retry}>
          <ReloadSvg />
          <Text
            variant="bodyMedium"
            style={[
              styles.retryText,
              {color: colors.primary},
            ]}>
            Retry
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  errorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  text: {
    marginTop: 40,
    marginBottom: 50,
    textAlign: 'center',
  },
  retry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  retryText: {
    marginLeft: 10
  },
});
