import { View} from 'react-native'
import React from 'react'
import SafeAreaScreen from '~components/SafeAreaScreen'
import CustomHeader from '~components/CustomHeader'
import BackButtonSvg from '~components/svg/backbutton'
import { RootStackScreenProps } from '~types/navigation'

export default function ListBike({navigation}: RootStackScreenProps<'ListBike'>) {
  return (
    <SafeAreaScreen>
      <CustomHeader
        title='Bike Listing'
        icon={<BackButtonSvg />}
        onIconPress={() => navigation.goBack()}
      />
      <View />
    </SafeAreaScreen>
  )
}