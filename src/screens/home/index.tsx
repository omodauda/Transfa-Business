import React from 'react'
import {View} from 'react-native'
import SafeAreaScreen from '~components/SafeAreaScreen'
import CustomHeader from '~components/CustomHeader'
import SettingSvg from '~components/svg/setting'
import {} from 'react-native-paper'
// import Button from '~components/Button'
// import styles from './styles'
// import ZeroBikeView from './zeroBikeView'
import PendingAccount from './pendingAccountView'

export default function Home() {
  // const {colors} = useTheme()
  return (
    <SafeAreaScreen>
      <PendingAccount />
    </SafeAreaScreen>
  )
}