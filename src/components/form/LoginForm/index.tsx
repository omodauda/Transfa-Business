import React from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import {TouchableWithoutFeedback } from 'react-native';
import {Text, useTheme} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '~types/navigation';
import { LoginWithEmailInput } from '~__generated__/graphql';
import useLogin from '~hooks/api/useLogin';

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

export default function LoginForm() {
  const { colors } = useTheme()
  const navigation = useNavigation<RootStackScreenProps<'Login'>['navigation']>()
  const {login, loading} = useLogin()

  function handleLogin(values: LoginWithEmailInput) {
    login(values)
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={schema}
      onSubmit={values => handleLogin(values)}
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
          <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
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
            loading={loading}
            onPress={handleSubmit}
            style={{marginTop: 48}}
          />
        </>
      )}
      </Formik>
  )
}