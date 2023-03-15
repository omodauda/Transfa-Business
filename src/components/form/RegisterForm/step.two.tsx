import React, { SetStateAction } from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import { RegistrationFormData } from '~types';

interface Props {
  formValues: RegistrationFormData;
  setFormValues: (v: SetStateAction<RegistrationFormData>) => void;
}

const schema = yup
  .object({
    registrationNo: yup
      .string()
      .required(),
    businessAddress: yup
      .string()
      .min(5, ({min}) => `business name must be at least ${min} characters`)
      .required('business name is a required field'),
  })

export default function StepTwo({ formValues, setFormValues }: Props) {
  const { registrationNo, businessAddress } = formValues;

  const submit = (data: RegistrationFormData) => {
    setFormValues(prevState => ({
      ...prevState,
      registrationNo: data.registrationNo,
      businessAddress: data.businessAddress
    }));
  }
  return (
    <Formik
      initialValues={{
        registrationNo,
        businessAddress,
      }}
      validationSchema={schema}
      onSubmit={values => submit(values)}
    >
      {({touched, handleChange, handleBlur, errors, values, handleSubmit, isValid}) => (
        <>
          <CustomTextInput
            error={!!(touched.registrationNo && errors.registrationNo)}
            label='CAC Reg No.'
            value={values.registrationNo}
            onChangeText={handleChange('registrationNo')}
            onBlur={handleBlur('registrationNo')}
            errorMessage={errors.registrationNo}
            autoCapitalize='none'
          />
          <CustomTextInput
            error={!!(touched.businessAddress && errors.businessAddress)}
            label='Business Address'
            value={values.businessAddress}
            onChangeText={handleChange('businessAddress')}
            onBlur={handleBlur('businessAddress')}
            errorMessage={errors.businessAddress}
            autoCapitalize='none'
          />
          <Button
            label='Create an Account'
            disabled={!isValid}
            onPress={handleSubmit}
            style={{marginTop: 40}}
          />
        </>
      )}
      </Formik>
  )
}