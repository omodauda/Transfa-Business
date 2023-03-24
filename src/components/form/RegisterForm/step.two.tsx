import React from 'react';
import { Formik } from 'formik';
import CustomTextInput from '~components/TextInput';
import * as yup from 'yup'
import Button from '~components/Button';
import { RegistrationFormData } from '~types';
import useRegister from '~hooks/api/useRegister';
import { RegisterBusinessInput } from '~__generated__/graphql';
import IntlFormat from '~utils/phone';

interface Props {
  formValues: RegistrationFormData;
  // setFormValues: (v: SetStateAction<RegistrationFormData>) => void;
}

const schema = yup
  .object({
    registrationNo: yup
      .string()
      .min(14, ({min}) => `cac registration number must be ${min} digits`)
      .max(14, ({max}) => `cac registration number cannot be more than ${max} digits`)
      .required('cac registration number is a required field'),
    phone: yup
      .string()
      .min(11, ({min}) => `*phone number must be at least ${min} characters`)
      .max(11, ({max}) => `*phone number should not be more than ${max} characters`)
      .required('phone number is a required field'),
    address: yup
      .string()
      .min(5, ({min}) => `business address must be at least ${min} characters`)
      .required('business name is a required field'),
  })

export default function StepTwo({ formValues }: Props) {
  const { registrationNo, address, phone, businessName, email, password } = formValues;
  const {signUp, loading} = useRegister();

  const submit = (data: RegistrationFormData) => {
    const phoneNumber = IntlFormat(data.phone!)
    const formData = {
      businessName,
      email,
      password,
      registrationNo: data.registrationNo,
      address: data.address,
      phone: phoneNumber
    }
    signUp(formData as RegisterBusinessInput)
  }
  return (
    <Formik
      initialValues={{
        registrationNo,
        phone,
        address,
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
            keyboardType='number-pad'
          />
          <CustomTextInput
            error={!!(touched.phone && errors.phone)}
            label='Phone Number'
            value={values.phone}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            errorMessage={errors.phone}
            autoCapitalize='none'
            keyboardType='number-pad'
          />
          <CustomTextInput
            error={!!(touched.address && errors.address)}
            label='Business Address'
            value={values.address}
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            errorMessage={errors.address}
            autoCapitalize='none'
          />
          <Button
            label='Create an Account'
            disabled={!isValid}
            loading={loading}
            onPress={handleSubmit}
            style={{marginTop: 40}}
          />
        </>
      )}
      </Formik>
  )
}