/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleProp, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Text, useTheme } from 'react-native-paper'

type HeaderStyleProps = {
  marginBottom?: number
}

interface Props {
  icon: ReactNode;
  onIconPress: () => void;
  title?: string;
  style?: StyleProp<HeaderStyleProps>
}

function CustomHeader ({ icon, title, onIconPress, style }: Props) {
  const {colors} = useTheme()
  return (
    <View style={[styles.header, {backgroundColor: colors.background}, style]}>
      <TouchableOpacity
        onPress={onIconPress}
        activeOpacity={0.8}
        style={{ marginLeft: -10 }}
      >
        {icon}
      </TouchableOpacity>
      <View>
        <Text
          variant='headlineMedium'
          style={{ color: colors.onBackground }}
        >
          {title}
        </Text>
      </View>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default CustomHeader