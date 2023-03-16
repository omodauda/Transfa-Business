/* eslint-disable @typescript-eslint/no-use-before-define */
import {StyleSheet, View} from 'react-native';
import React, { useState } from 'react';
import Button from '~components/Button';
import * as yup from 'yup';
import SafeAreaScreen from '~components/SafeAreaScreen';
import { useTheme, Text } from 'react-native-paper';
import CustomHeader from '~components/CustomHeader';
import BackButtonSvg from '~components/svg/backbutton';
import { RootStackScreenProps } from '~types/navigation';
import ForgotPasswordSvg from '~components/svg/forgotpassword';
import PhoneEmailInput from '~components/PhoneEmailInput';
import IntlFormat from '~utils/phone';

export default function ForgotPassword ({navigation}: RootStackScreenProps<'ForgotPassword'>) {
  const { colors } = useTheme();
  const [identity, setIdentity] = useState<string>('');
  const [isValidIdentity, setIsValidIdentity] = useState<boolean>(false);
  const [identityError, setIdentityError] = useState<string>();

  const schema = yup.object().shape({
    email: yup.string().email(),
    phone: yup
      .string()
      .matches(
        /^(?:(?:(?:\+?234(?:h1)?|01)h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/,
      ),
  });

  const normalizedIdentity = identity.toLowerCase();
  const isEmail = schema.isValidSync({email: normalizedIdentity});
  const handleSubmit = () => {
    if (identity.length === 0) {
      setIdentityError('Phone or Email is required');
    }
    if (isEmail) {
      console.log(normalizedIdentity)
    } else {
      const isPhone = schema.isValidSync({phone: normalizedIdentity});
      if (isPhone) {
        const phone = IntlFormat(normalizedIdentity);
       console.log(phone)
      }
    }
  };

  return (
    <SafeAreaScreen>
      <CustomHeader
        style={{ marginBottom: 27 }}
        icon={<BackButtonSvg />}
        onIconPress={() => navigation.goBack()}
      />
      <View style={styles.logoView}>
        <ForgotPasswordSvg />
      </View>
      <View style={styles.textWrapper}>
        <Text
          variant='headlineMedium'
          style={[styles.title, {color: colors.onBackground}]}>
          Forgot Password
        </Text>
        <Text
          variant='bodyMedium'
          style={[styles.desc, {color: colors.onSecondary}]}>
          Enter the phone number or email address registered to your account to
          reset your password
        </Text>
      </View>
      <PhoneEmailInput
        identity={identity}
        setIdentity={setIdentity}
        isValidIdentity={isValidIdentity}
        setIsValidIdentity={setIsValidIdentity}
        identityError={identityError}
        setIdentityError={setIdentityError}
      />
      <Button
        disabled={identityError?.length !== 0}
        onPress={() => handleSubmit()}
        label="Reset Password"
        style={styles.button}
      />
    </SafeAreaScreen>
  );
};

const styles = StyleSheet.create({
  logoView: {
    alignItems: 'center',
  },
  textWrapper: {
    marginVertical: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  desc: {
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
  },
});
