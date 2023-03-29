import React from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import { ResetPasswordInput } from '~types';

interface Props {
  submitForm: (data: ResetPasswordInput) => void;
  loading: boolean;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .required('*Password is a required field')
    .min(5, ({min}) => `*Password must be at least ${min} characters`),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password do not match')
    .required('*Confirm password is a required field'),
});

export default function ResetPasswordForm({ submitForm, loading }: Props) {
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: ''
      }}
      validationSchema={schema}
      onSubmit={values => submitForm(values)}
    >
      {({touched, handleChange, handleBlur, errors, values, handleSubmit, isValid}) => (
        <>
          <CustomTextInput
            password
            error={!!(touched.password && errors.password)}
            label='New Password'
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            errorMessage={errors.password}
          />
          <CustomTextInput
            password
            error={!!(touched.confirmPassword && errors.confirmPassword)}
            label='Re-enter Password'
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            errorMessage={errors.confirmPassword}
          />
          <Button
            label='Create New Password'
            loading={loading}
            disabled={!isValid}
            onPress={handleSubmit}
            style={{marginTop: 48}}
          />
        </>
      )}
      </Formik>
  )
}