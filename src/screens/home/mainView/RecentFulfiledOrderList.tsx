/* eslint-disable @typescript-eslint/no-use-before-define */
import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Order } from '~types'
import {Text, useTheme} from 'react-native-paper'

interface Props {
  data: Order[]
}

export default function RecentFulfiledOrderList({ data }: Props) {
  const {colors} = useTheme()
  return (
   <FlatList
      data={data}
      keyExtractor={item => item.id}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={[styles.orderView, {backgroundColor: colors.background}]}>
          <View>
            <Text variant="titleSmall" style={{color: colors.onSecondary}}>Bike Reg. No.</Text>
            <Text style={{ color: colors.onBackground }}>{item.rider.registrationNo}</Text>
          </View>
          <View>
            <Text variant="titleSmall" style={{color: colors.onSecondary}}>Rider</Text>
            <Text style={{ color: colors.onBackground }}>{item.rider.fullname}</Text>
          </View>
          <View>
            <Text variant="titleSmall" style={{color: colors.onSecondary}}>Amount</Text>
            <Text style={{ color: colors.onBackground }}>N{item.amount}</Text>
          </View>
        </View>
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
    marginBottom: 26
  },
  orderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 7.5,
    marginBottom: 6
  }
})