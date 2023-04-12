import { View, Image } from 'react-native'
import React, { useState } from 'react'
import SafeAreaScreen from '~components/SafeAreaScreen'
import BackButtonSvg from '~components/svg/backbutton'
import CustomHeader from '~components/CustomHeader'
import { RootStackScreenProps } from '~types/navigation'
import { ActivityIndicator, useTheme, Text } from 'react-native-paper'
import { LocalFormat } from '~utils/phone'
import { RiderStatus } from '~__generated__/graphql'
import Button from '~components/Button'
import styles from './styles'

export default function BikeDetails({
  navigation,
  route: {
    params: { rider }
  }
}: RootStackScreenProps<'BikeDetails'>) {
  const { colors } = useTheme()
  const { bikeImage, bikeRegNo, fullName, phone, status} = rider;
  const [loading, setLoading] = useState(false)
  return (
    <SafeAreaScreen>
      <CustomHeader
        title='Bike Details'
        icon={<BackButtonSvg />}
        onIconPress={() => navigation.goBack()}
      />
      <View style={styles.imageContainer}>
        {loading &&
          <View style={[styles.image, styles.centeredView, {  backgroundColor: colors.secondaryContainer }]}>
            <ActivityIndicator color={colors.primary} />
          </View>
        }
        <Image
          source={{ uri: bikeImage }}
          resizeMode="cover"
          style={styles.image}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <View style={styles.details}>
        <View>
          <Text variant="labelSmall" style={[styles.label, { color: colors.onSecondary }]}>
            Registration No.
          </Text>
          <Text variant="bodyMedium" style={{ color: colors.onBackground }}>
            {bikeRegNo}
          </Text>
        </View>
        <View style={styles.marginedView}>
          <Text variant="labelSmall" style={[styles.label, { color: colors.onSecondary }]}>
            Bike&apos;s Status
          </Text>
          <Text variant="bodyMedium" style={{ color: status === RiderStatus.Active ? colors.primary : colors.error }}>
            {status}
          </Text>
        </View>
      </View>
      <Text variant="labelMedium" style={[styles.title, { color: colors.onBackground }]}>
        RIDER&apos;S DETAILS
      </Text>
      <View style={styles.details}>
        <View>
          <Text variant="labelSmall" style={[styles.label, { color: colors.onSecondary }]}>
            Name
          </Text>
          <Text variant="bodyMedium" style={{ color: colors.onBackground }}>
            {fullName}
          </Text>
        </View>
        <View style={styles.marginedView}>
          <Text variant="labelSmall" style={[styles.label, { color: colors.onSecondary }]}>
            Phone
          </Text>
          <Text variant="bodyMedium" style={{ color: colors.onBackground }}>
            {LocalFormat(phone)}
          </Text>
        </View>
      </View>
      <Button
        label='Edit'
        style={styles.button}
      />
    </SafeAreaScreen>
  )
}