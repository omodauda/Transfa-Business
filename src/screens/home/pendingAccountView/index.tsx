/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, View } from 'react-native'
import React from 'react'
import PendingSvg from '~components/svg/pending'
import {Text, useTheme} from 'react-native-paper'

export default function PendingAccount() {
  const {colors} = useTheme()
  return (
   <View style={[styles.centeredView]}>
        <PendingSvg />
        <Text
          variant="headlineMedium"
          style={[styles.title, { color: colors.onBackground }]}
        >
          Account Pending Review
        </Text>
        <Text
          variant="bodyMedium"
          style={{color: colors.onSecondary, textAlign: 'center'}}
        >
          It takes 2 to 3 business working days to verify your account. We will notify you once your account has been verified.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 85,
    marginBottom: 8
  }
})