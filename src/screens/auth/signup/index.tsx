import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaScreen from '~components/SafeAreaScreen'
import { useTheme, Text } from 'react-native-paper'
import BackButtonSvg from '~components/svg/backbutton'
import CustomHeader from '~components/CustomHeader'
import { RootStackScreenProps } from '~types/navigation'
import RegisterSvg from '~components/svg/register'
import StepOne from '~components/form/RegisterForm/step.one'
import { RegistrationFormData } from '~types'
import StepTwo from '~components/form/RegisterForm/step.two'
import styles from './styles'

export default function Signup({
  navigation,
  route: { params }
}: RootStackScreenProps<'SignUp'>) {
  const { colors } = useTheme()
  const currentStep = params.step;
  const totalSteps = 2;

  const [registrationData, setRegistrationData] = useState<RegistrationFormData>({
    businessName: '',
    emailAddress: '',
    password: '',
    registrationNo: '',
    businessAddress: ''
  })
  console.log('registration.data', registrationData)

  const goBack = () => {
    if (currentStep === 1) {
      navigation.goBack()
    } else {
      navigation.navigate('SignUp', {step: 1})
    }
  }

  return (
    <SafeAreaScreen>
      <CustomHeader
        style={{ marginBottom: 27 }}
        icon={<BackButtonSvg />}
        onIconPress={goBack}
        title='Create an Account'
      />
      <KeyboardAvoidingView behavior='height'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.centeredView}>
            <RegisterSvg />
            {
              currentStep === 2 && (
                <Text variant='bodyMedium' style={[styles.description, { color: colors.onSecondary }]}>
                  Additional details to help us verify your business
                </Text>
              )
            }
          </View>
          <Text variant='bodyMedium' style={[styles.step, { color: colors.primary, marginTop: currentStep === 1 ? 45 : 12 }]}>
            Step {currentStep} of {totalSteps}
          </Text>
          {
            currentStep === 1 &&
            <StepOne
              formValues={registrationData}
              setFormValues={setRegistrationData}
            />
          }
          {
            currentStep === 2 && (
              <>
              <StepTwo
                formValues={registrationData}
                setFormValues={setRegistrationData}
              />
                <Text variant='bodyMedium' style={[styles.terms, {color: colors.onBackground}]}>
                  By continuing, you accept our
                  <Text variant='bodyMedium' style={{color: colors.primary}}> Terms Conditions and Privacy Policy</Text>
                </Text>
              </>
            )
          }
        </ScrollView>
      </KeyboardAvoidingView>
   </SafeAreaScreen>
  )
}