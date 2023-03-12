import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps, useTheme } from 'react-native-paper'

const Spinner: React.FC<ActivityIndicatorProps> = ({
  size = 'small',
  animating = false,
  color,
  hidesWhenStopped,
  style
}) => {
  const { colors } = useTheme()
  const spinnerColor = color || colors.onPrimaryContainer
  return (
    <ActivityIndicator
      size={size}
      animating={animating}
      color={spinnerColor}
      hidesWhenStopped={hidesWhenStopped}
      style={style}
    />
  )
}

const styles = StyleSheet.create({})

export default Spinner;