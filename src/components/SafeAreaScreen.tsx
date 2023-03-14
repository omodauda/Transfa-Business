import { StyleProp, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AlignItems, JustifyContent } from '~types';

type SafeAreaScreenStyleProps = {
  backgroundColor: string;
  justifyContent?: JustifyContent
  alignItems?: AlignItems;
}

interface Props {
  children: ReactNode;
  style: StyleProp<SafeAreaScreenStyleProps>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24
  }
})

function SafeAreaScreen({children, style}: Props) {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.screen, {paddingTop: top, paddingBottom: bottom}, style]}>
      {children}
    </View>
  )
}

export default SafeAreaScreen