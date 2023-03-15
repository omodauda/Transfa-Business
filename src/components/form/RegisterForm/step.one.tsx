import React, { SetStateAction } from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import { RegistrationFormData } from '~types';
import {useNavigation} from '@react-navigation/native'

interface Props {
  formValues: RegistrationFormData;
  setFormValues: (v: SetStateAction<RegistrationFormData>) => void;
  // formData: (data: LoginInput) => void;
}

type UseNavigation = {
  navigate: (args0: string, args1: {step: number}) => void
}

const schema = yup
  .object({
    businessName: yup
      .string()
      .min(5, ({min}) => `business name must be at least ${min} characters`)
      .required('business name is a required field'),
    emailAddress: yup
      .string()
      .email()
      .required('email address is a required field'),
    password: yup
      .string()
      .min(5, ({ min }) => `password must be at least ${min} characters`)
      .required()
  })

export default function StepOne({ formValues, setFormValues }: Props) {
  const { businessName, emailAddress, password } = formValues;
  const navigation = useNavigation<UseNavigation>()

  const submit = (data: RegistrationFormData) => {
    setFormValues(prevState => ({
      ...prevState,
      businessName: data.businessName,
      emailAddress: data.emailAddress,
      password: data.password
    }));
    navigation.navigate('SignUp', {step: 2})
  }
  return (
    <Formik
      initialValues={{
        businessName,
        emailAddress,
        password
      }}
      validationSchema={schema}
      onSubmit={values => submit(values)}
    >
      {({touched, handleChange, handleBlur, errors, values, handleSubmit, isValid}) => (
        <>
          <CustomTextInput
            error={!!(touched.businessName && errors.businessName)}
            label='Business Name'
            value={values.businessName}
            onChangeText={handleChange('businessName')}
            onBlur={handleBlur('businessName')}
            errorMessage={errors.businessName}
            autoCapitalize='none'
          />
          <CustomTextInput
            error={!!(touched.emailAddress && errors.emailAddress)}
            label='Email address'
            value={values.emailAddress}
            onChangeText={handleChange('emailAddress')}
            onBlur={handleBlur('emailAddress')}
            errorMessage={errors.emailAddress}
            autoComplete='email'
            autoCapitalize='none'
          />
          <CustomTextInput
            password
            error={!!(touched.password && errors.password)}
            label='Password'
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            errorMessage={errors.password}
          />
          <Button
            label='Continue'
            disabled={!isValid}
            onPress={handleSubmit}
            style={{marginTop: 40}}
          />
        </>
      )}
      </Formik>
  )
}