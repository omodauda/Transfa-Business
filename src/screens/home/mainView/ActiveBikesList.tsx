/* eslint-disable @typescript-eslint/no-use-before-define */
import { FlatList, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import {Text, useTheme} from 'react-native-paper'
import { Rider } from '~types'

interface Props {
  data: Rider[]
}
export default function ActiveBikesList({data}: Props) {
  const {colors} = useTheme()
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
          <View style={styles.bikeView}>    
            <Image source={item.image} resizeMode="cover" style={styles.image} />
          <Text variant="bodySmall" style={[styles.regNo, { color: colors.onSecondary }]}>
            {item.registrationNo}
          </Text>
          </View>
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  bikeView: {
    width: 144,
    height: 139,
    marginRight: 8
  },
  image: {
    width: '100%',
    height: 112,
    borderRadius: 8
  },
  regNo: {
    marginTop: 8
  } 
})