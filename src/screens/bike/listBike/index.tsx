import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import SafeAreaScreen from '~components/SafeAreaScreen'
import CustomHeader from '~components/CustomHeader'
import BackButtonSvg from '~components/svg/backbutton'
import { RootStackScreenProps } from '~types/navigation'
import { RadioButton, Text, useTheme } from 'react-native-paper'
import CustomTextInput from '~components/TextInput'
import { RiderStatus } from '~__generated__/graphql'
import pickImage from '~components/ImagePicker'
import UploadSvg from '~components/svg/upload'
import * as ImagePicker from 'expo-image-picker';
import {MaterialIcons} from '@expo/vector-icons'
import Button from '~components/Button'
import { showMessage } from 'react-native-flash-message'
import {object, string, InferType} from 'yup'
import useListBike from '~hooks/api/useListBike'
import styles from './styles'

const FormSchema = object({
  password: string()
    .required("Rider's account password is required")
    .min(5, ({ min }) => `Password must be at least ${min} characters`),
  phone: 
    string()
    .required("Rider's phone number is required")
    .matches(
      /^(?:(?:(?:\+?234(?:h1)?|01)h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/,
      "Invalid phone number"
    )
    .min(14, () => `Phone number must be in international format`)
  ,
  fullName: string()
    .required("Rider's full name is required")
    .matches(/(\w.+\s).+/, 'Enter at least 2 names'),
  regNo: string()
    .required('Bike registration number is required')
    .matches(/^[A-Z]{3}-[0-9]{3}[A-Z]{2}$/, "Invalid registration number"),
})

type FormValue = InferType<typeof FormSchema>

export default function ListBike({ navigation }: RootStackScreenProps<'ListBike'>) {
  const {colors} = useTheme()
  const defaultStatus = RiderStatus.Active
  const [status, setStatus] = useState<string>(defaultStatus)
  const [image, setImage] = useState<ImagePicker.ImagePickerSuccessResult | null>(null)
  const [fieldvalues, setFieldValues] = useState<FormValue>({
    regNo: '',
    fullName: '',
    phone: '',
    password: ''
  })
  const { loading, listBike } = useListBike()
  const handleSubmit = async() => {
    try {
      await FormSchema.validate(fieldvalues)
      if (!image) {
        throw new Error('select bike image to upload')
      }
      const asset = image.assets[0];
      const uri = Platform.OS === 'ios' ? asset.uri.replace('file://', '') : asset.uri;
      const filename = asset.uri.split('/').pop() as string;
      const match = /\.(\w+)$/.exec(filename as string);
      const type = match ? `image/${match[1]}` : 'image';

      const formData = new FormData()
      formData.append('image', {
        uri,
        name: filename,
        type,
      })
      formData.append('bikeRegNo', fieldvalues.regNo)
      formData.append('status', status)
      formData.append('fullName', fieldvalues.fullName)
      formData.append('phone', fieldvalues.phone)
      formData.append('password', fieldvalues.password)
      listBike(formData)
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.message,
        type: 'default',
      })
    }
  }

  return (
    <SafeAreaScreen>
      <CustomHeader
        title='Bike Listing'
        icon={<BackButtonSvg />}
        onIconPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView behavior="height">
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text variant="labelMedium" style={[styles.headerTitle, {color: colors.onBackground}]}>
            BIKE&apos;S DETAILS
          </Text>
          <CustomTextInput
            label="Bike's Registration No."
            placeholder='e.g. LAG-123FG'
            value={fieldvalues.regNo}
            onChangeText={(text: string) => {
              setFieldValues(prev => ({
                ...prev,
                regNo: text
              }))
            }}
            accessibilityLabel="bike's registration number"
          />
          <View>
            <Text variant="bodySmall" style={{color: colors.surfaceDisabled}}>Bike&apos;s Status</Text>
            <RadioButton.Group onValueChange={value => setStatus(value)} value={status}>
              <View style={[styles.radioBtnContainer]}>
                <View style={[styles.radioBtnView]}>
                  <RadioButton.Item
                    labelStyle={[styles.radioBtnLabel, { color: colors.onBackground }]}
                    position="leading"
                    mode="android"
                    label='Active'
                    value={RiderStatus.Active}
                    accessibilityLabel="active status"
                  />
                </View>
                <View style={styles.radioBtnView}>
                  <RadioButton.Item
                    labelStyle={[styles.radioBtnLabel, { color: colors.onBackground }]}
                    position="leading"
                    mode="android"
                    label="Inactive"
                    value={RiderStatus.Inactive}
                    accessibilityLabel="inactive status"
                  />
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <TouchableOpacity onPress={() => pickImage({setImage})}>
            <View style={[styles.imagePicker, { borderColor: colors.primary }]}>
              <UploadSvg />
              <Text variant="labelSmall" style={[styles.uploadText, {color: colors.primary}]}>Upload Bike&apos;s Image</Text>
            </View>
          </TouchableOpacity>
          {
            image && (
              <View style={styles.selectedImageView}>
                <MaterialIcons name='photo' size={27} color={colors.primary} />
                <Text variant="labelSmall" style={[styles.imageName, {color: colors.primary}]}>{image.assets[0].fileName}</Text>
              </View>
            )
          }
          <View style={styles.details}>
            <Text variant="labelMedium" style={{ color: colors.onBackground, marginBottom: 12 }}>
              RIDER&apos;S DETAILS
            </Text>
            <CustomTextInput
              label='Full Name'
              autoComplete="name"
              autoCapitalize="words"
              accessibilityLabel="rider's full name"
              value={fieldvalues.fullName}
              onChangeText={(text: string) => {
                setFieldValues(prev => ({
                  ...prev,
                  fullName: text
                }))
              }}
            />
            <CustomTextInput
              label='Phone Number'
              accessibilityLabel=" rider's phone number"
              keyboardType="phone-pad"
              value={fieldvalues.phone}
              onChangeText={(text: string) => {
                setFieldValues(prev => ({
                  ...prev,
                  phone: text
                }))
              }}
            />
            <CustomTextInput
              label='Login Password'
              accessibilityLabel="rider's login password"
              password
              value={fieldvalues.password}
              onChangeText={(text: string) => {
                setFieldValues(prev => ({
                  ...prev,
                  password: text
                }))
              }}
            />
          </View>
          <Button
            loading={loading}
            label='Submit'
            onPress={handleSubmit}
          />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaScreen>
  )
}