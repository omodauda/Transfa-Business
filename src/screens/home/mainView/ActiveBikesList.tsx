/* eslint-disable @typescript-eslint/no-use-before-define */
import { FlatList, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {ActivityIndicator, Text, useTheme} from 'react-native-paper'
import { Rider } from '~__generated__/graphql'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '~types/navigation'

interface Props {
  data: Rider[]
}
export default function ActiveBikesList({data}: Props) {
  const { colors } = useTheme()
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('BikeDetails', {rider: item})}
          >
              <Image
                source={{ uri: item.bikeImage }}
                resizeMode="cover" style={styles.image}
                onLoadStart={() => onLoading({ value: true })}
                onLoadEnd={() => onLoading({ value: false })}
              />
              <Text variant="bodySmall" style={[styles.regNo, { color: colors.onSecondary }]}>
                {item.bikeRegNo}
              </Text>
            </TouchableOpacity>
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