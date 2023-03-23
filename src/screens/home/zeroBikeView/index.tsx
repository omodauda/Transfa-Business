/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomHeader from '~components/CustomHeader'
import SettingSvg from '~components/svg/setting'
import { useTheme, Text } from 'react-native-paper'
import ListBikeSvg from '~components/svg/listbike'
import Button from '~components/Button'

export default function ZeroBikeView() {
  const {colors} = useTheme()
  return (
    <View style={styles.screen}>
      <CustomHeader
        title='Transfa'
        icon={<SettingSvg />}
        onIconPress={() => { }}
        labelStyle={{color: colors.primary}}
      />
      <Text
        variant='bodyMedium'
        style={[styles.welcomeText, {color: colors.onBackground}]}
      >
        Welcome,
        <Text
          variant="labelMedium"
          style={{color: colors.primary}}
        > Admin</Text>
      </Text>
      <View style={styles.centeredView}>
        <ListBikeSvg />
        <View style={styles.descriptions}>
          <Text
            variant="headlineMedium"
            style={{ color: colors.onBackground, marginBottom: 8, textAlign: 'center' }}
          >
            Yet To List A Bike!
          </Text>
          <Text
            variant="bodyMedium"
            style={{ color: colors.onSecondary, textAlign: 'center' }}
          >
            You currently do not have any bike listed on the app. Add a bike to start your journey with Transfa.
          </Text>
        </View>
      </View>
      <Button
        label='Get Started'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24
  },
  welcomeText: {
    marginTop: 22,
    marginBottom: 44
  },
  centeredView: {
    alignItems: 'center'
  },
  descriptions: {
    marginTop: 72,
    marginBottom: 40
  }
})