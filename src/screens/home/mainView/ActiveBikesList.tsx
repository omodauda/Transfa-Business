/* eslint-disable @typescript-eslint/no-use-before-define */
import { FlatList, StyleSheet, View, Image } from 'react-native'
import React, { useState } from 'react'
import {ActivityIndicator, Text, useTheme} from 'react-native-paper'
import { Rider } from '~__generated__/graphql'

interface Props {
  data: Rider[]
}
export default function ActiveBikesList({data}: Props) {
  const { colors } = useTheme()
  const [loading, setLoading] = useState(false)

  function onLoading({ value }: {value: boolean}) {
    setLoading(value)
  }
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
          <View style={styles.bikeView}>    
            {loading &&
                <View style={[styles.image, styles.centeredView, {  backgroundColor: colors.secondaryContainer }]}>
                  <ActivityIndicator color={colors.primary} />
              </View>
            }
            <Image
              source={{ uri: item.bikeImage }}
              resizeMode="cover" style={styles.image}
              onLoadStart={() => onLoading({ value: true })}
              onLoadEnd={() => onLoading({ value: false })}
            />
            <Text variant="bodySmall" style={[styles.regNo, { color: colors.onSecondary }]}>
              {item.bikeRegNo}
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
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
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