import { View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '~types/navigation'
import SafeAreaScreen from '~components/SafeAreaScreen'
import { useTheme, Text } from 'react-native-paper'
import CustomHeader from '~components/CustomHeader'
import BackButtonSvg from '~components/svg/backbutton'
import WelcomeSvg from '~components/svg/welcome'
import styles from './styles'

function Login({navigation}: RootStackScreenProps<'Login'>) {
  const {colors} = useTheme()
  return (
    <SafeAreaScreen style={{backgroundColor: colors.background}}>
      <CustomHeader
        style={{ marginBottom: 27 }}
        icon={<BackButtonSvg />}
        onIconPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <WelcomeSvg />
        <View style={styles.title}>
          <Text
            variant='headlineMedium'
            style={[styles.centeredText, { color: colors.onBackground, marginBottom: 8 }]}
          >
            Welcome Back!
          </Text>
          <Text variant='bodyMedium' style={[styles.centeredText, {color: colors.onSecondaryContainer}]}>Fill in your credentials below and login to your account</Text>
        </View>
      </View>
    </SafeAreaScreen>
  )
}

export default Login