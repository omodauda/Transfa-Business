import { View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '~types/navigation'
import styles from './styles'
import {LinearGradient} from 'expo-linear-gradient'

const Onboarding = ({}: RootStackScreenProps<'Onboarding'>) => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#7C64C9', '#F8EFFB', '#FFFFFF']}
        style={styles.gradientView}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.6, 1]}
      >
      </LinearGradient>
    </View>
  )
}

export default Onboarding