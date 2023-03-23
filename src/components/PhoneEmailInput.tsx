/* eslint-disable @typescript-eslint/no-use-before-define */
import {StyleSheet} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { useTheme, Text } from 'react-native-paper';
import CustomTextInput from './TextInput';

interface Props {
  identity: string;
  setIdentity: (data: string) => void;
  isValidIdentity: boolean;
  setIsValidIdentity: (value: boolean) => void;
  identityError: string | undefined;
  setIdentityError: (value: string) => void;
}

function PhoneEmailInput ({
  identity,
  setIdentity,
  isValidIdentity,
  setIsValidIdentity,
  identityError,
  setIdentityError,
}: Props) {
  const {colors} = useTheme();
  function isNumeric(str: any) {
    if (typeof str !== 'string') {
      return false;
    }
    return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
  }

  let numeric: boolean;
  if (identity?.length > 2) {
    numeric = isNumeric(identity);
  }

  const schema = yup.object().shape({
    email: yup.string().email(),
    phone: yup
      .string()
      .matches(
        /^(?:(?:(?:\+?234(?:h1)?|01)h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/,
      ),
  });

  function validateIdentity(str: string) {
    if (numeric) {
      const isValidPhone = schema.isValidSync({phone: str});
      if (isValidPhone) {
        setIsValidIdentity(true);
        setIdentityError('');
      } else {
        setIsValidIdentity(false);
        setIdentityError('Invalid Email / Phone');
      }
    } else {
      const isValidEmail = schema.isValidSync({email: str});
      if (isValidEmail) {
        setIsValidIdentity(true);
        setIdentityError('');
      } else {
        setIsValidIdentity(false);
        setIdentityError('Invalid Email / Phone');
      }
    }
  }
  return (
    <>
      <CustomTextInput
        label="Phone or Email"
        placeholder=""
        value={identity}
        onChangeText={(text: string) => {
          setIdentity(text);
          validateIdentity(identity);
        }}
        errorMessage={identityError}
      />
      {!isValidIdentity && (
        <Text
          style={[
            styles.identityError,
            {color: colors.error},
          ]}>
          {identityError}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  identityError: {
    marginTop: -11,
    marginBottom: 5,
  },
});

export default PhoneEmailInput;
