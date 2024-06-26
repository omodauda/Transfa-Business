import React, { SetStateAction } from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import { RegistrationFormData } from '~types';
import {useNavigation} from '@react-navigation/native'
import { RootStackScreenProps } from '~types/navigation';

interface Props {
  formValues: RegistrationFormData;
  setFormValues: (v: SetStateAction<RegistrationFormData>) => void;
}

const schema = yup
  .object({
    businessName: yup
      .string()
      .min(5, ({min}) => `business name must be at least ${min} characters`)
      .required('business name is a required field'),
    email: yup
      .string()
      .email()
      .required('email address is a required field'),
    password: yup
      .string()
      .min(5, ({ min }) => `password must be at least ${min} characters`)
      .required()
  })

export default function StepOne({ formValues, setFormValues }: Props) {
  const { businessName, email, password } = formValues;
  const navigation = useNavigation<RootStackScreenProps<'SignUp'>['navigation']>()

  const submit = (data: RegistrationFormData) => {
    setFormValues(prevState => ({
      ...prevState,
      businessName: data.businessName,
      email: data.email,
      password: data.password
    }));
    navigation.navigate('SignUp', {step: 2})
  }
  return (
    <Formik
      initialValues={{
        businessName,
        email,
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
            error={!!(touched.email && errors.email)}
            label='Email address'
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            errorMessage={errors.email}
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