import {View} from 'react-native'
import React from 'react'
import CustomHeader from '~components/CustomHeader'
import SettingSvg from '~components/svg/setting'
import { useTheme, Text } from 'react-native-paper'
import {ORDERS} from '~mocks'
import Button from '~components/Button'
import { Rider } from '~__generated__/graphql'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '~types/navigation'
import styles from './styles'
import ActiveBikesList from './ActiveBikesList'
import RecentFulfiledOrderList from './RecentFulfiledOrderList'

interface MainViewProps {
  bikes: Rider[]
}

export default function MainView({bikes}: MainViewProps) {
  const { colors } = useTheme()
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const enableViewAll = ORDERS.length > 3;

  const recentOrders = ORDERS.slice(0, 3)
  return (
    <View style={styles.screen}>
      <View style={styles.paddedView}>
        <CustomHeader
        title='Transfa'
        icon={<SettingSvg />}
        onIconPress={() => { }}
        labelStyle={{color: colors.primary}}
        />
        <Text
          variant='bodyMedium'
          style={[styles.welcomeText, {color: colors.onBackground}]}
        >
          Welcome,
          <Text
            variant="labelMedium"
            style={{color: colors.primary}}
          > Admin</Text>
        </Text>
        <View style={[styles.bikeView]}>
          <Text
            variant="labelMedium"
            style={{ color: colors.onBackground, marginBottom: 16 }}
          >
            ACTIVE BIKES
          </Text>
          <ActiveBikesList data={bikes} />
        </View>
      </View>

      <View style={[styles.paddedView, styles.recentOrders, {backgroundColor: colors.tertiary}]}>
        <View style={styles.spacedRow}>
          <Text variant="bodySmall" style={{ color: colors.onBackground, fontFamily: 'GeneralSans-Medium' }}>
            RECENT ORDER FULFILMENTS
          </Text>
          {enableViewAll && (
            <Text variant="titleSmall" style={{ color: colors.primary }}>
              View All
            </Text>)
          }
        </View>
        <RecentFulfiledOrderList data={recentOrders} />
        <Button
          label='Add A New Bike'
          onPress={() => navigation.navigate('ListBike')}
        />
      </View>
    </View>
  )
}