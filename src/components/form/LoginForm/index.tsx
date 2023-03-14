import React from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import { LoginInput } from '~types';
import {TouchableWithoutFeedback } from 'react-native';
import {Text, useTheme} from 'react-native-paper'

interface Props {
  formData: (data: LoginInput) => void;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(5, ({ min }) => `*password must be at least ${min} characters`)
      .required()
  })

export default function LoginForm({ formData }: Props) {
  const {colors} = useTheme()
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={schema}
      onSubmit={values => formData(values)}
    >
      {({touched, handleChange, handleBlur, errors, values, handleSubmit, isValid}) => (
        <>
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
          <TouchableWithoutFeedback>
            <Text
              variant='bodySmall'
              style={{ color: colors.primary, textAlign: 'right', marginTop: 11 }}
            >
              Forgot password?
            </Text>
          </TouchableWithoutFeedback>
          <Button
            label='Log In'
            disabled={!isValid}
            onPress={handleSubmit}
            style={{marginTop: 48}}
          />
        </>
      )}
      </Formik>
  )
}