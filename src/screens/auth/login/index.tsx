import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '~types/navigation'
import SafeAreaScreen from '~components/SafeAreaScreen'
import { useTheme, Text } from 'react-native-paper'
import CustomHeader from '~components/CustomHeader'
import BackButtonSvg from '~components/svg/backbutton'
import WelcomeSvg from '~components/svg/welcome'
import LoginForm from '~components/form/LoginForm'
import { LoginInput } from '~types'
import styles from './styles'

function Login({navigation}: RootStackScreenProps<'Login'>) {
  const { colors } = useTheme()
  
  const formData = ({email, password}: LoginInput) => {
    console.log({email, password})
  }
  return (
    <SafeAreaScreen style={{backgroundColor: colors.background}}>
      <CustomHeader
        style={{ marginBottom: 27 }}
        icon={<BackButtonSvg />}
        onIconPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView behavior='height'>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <LoginForm formData={formData} />
        </ScrollView>
        <View style={styles.footer}>
          <Text
            variant='bodyMedium'
            style={[styles.terms, {color: colors.onBackground}]}>
            Don&apos;t have an account?{' '}
          </Text>
          <TouchableWithoutFeedback>
            <Text variant='bodyMedium' style={{color: colors.primary}}>
              Create an Account
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaScreen>
  )
}

export default Login