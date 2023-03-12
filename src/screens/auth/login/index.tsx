import { View, Text } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '~types/navigation'
import SafeAreaScreen from '~components/SafeAreaScreen'
import { useTheme } from 'react-native-paper'
import styles from './styles'
import CustomHeader from '~components/CustomHeader'
import BackButtonSvg from '~components/svg/backbutton'

const Login = ({navigation}: RootStackScreenProps<'Login'>) => {
  const {colors} = useTheme()
  return (
    <SafeAreaScreen style={{backgroundColor: colors.background}}>
      <CustomHeader icon={<BackButtonSvg />} onIconPress={() => navigation.goBack()} />
    </SafeAreaScreen>
  )
}

export default Login