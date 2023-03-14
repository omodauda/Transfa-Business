import { View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '~types/navigation'
import { LinearGradient } from 'expo-linear-gradient'
import OnboardSvg from '~components/svg/onboard'
import { Text, useTheme } from 'react-native-paper'
import Button from '~components/Button'
import styles from './styles'

function Onboarding ({navigation}: RootStackScreenProps<'Onboarding'>) {
  const {colors } = useTheme();
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#7C64C9', '#F8EFFB', '#FFFFFF']}
        style={styles.gradientView}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.6, 1]}
      >
        <OnboardSvg />
        <Text variant='titleLarge' style={[styles.title, { color: colors.primary }]}>
          Send anything fast
        </Text>
        <Text variant='bodyMedium'
          style={[styles.subTitle, { color: colors.onBackground, textAlign: 'center' }]}
        >
          Door-to-door integrated logistic service solutions for all
          kind of delivery
        </Text>
        <Button
          label='Create an Account'
        />
        <Button
          label='Log In'
          style={styles.loginButton}
          labelStyle={{ color: colors.primary }}
          onPress={() => navigation.navigate('Login')}
        />
      </LinearGradient>
    </View>
  )
}

export default Onboarding