/* eslint-disable @typescript-eslint/no-use-before-define */
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
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
import useForgotPasswordPhone from '~hooks/api/useForgotPasswordPhone';
import { showMessage } from 'react-native-flash-message';
import useForgotPasswordEmail from '~hooks/api/useForgotPasswordEmail';

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

  const phoneSuccess = (data: string) => {
    showMessage({
      message: 'Password Reset',
      description: data,
      type: 'default',
    });
    setTimeout(() => {
      navigation.navigate('Verification', {
        medium: 'phone number',
        data: {
          type: 'phone',
          value: IntlFormat(normalizedIdentity)
        },
        nextScreen: 'ResetPassword',
      });
    }, 3500);
  };

  const { forgotPasswordPhone, loading: withPhoneLoading } = useForgotPasswordPhone({ success: phoneSuccess })
  
  const emailSuccess = (data: string) => {
    showMessage({
      message: 'Password Reset',
      description: data,
      type: 'default',
    });
    setTimeout(() => {
      navigation.navigate('Verification', {
        medium: 'email address',
        data: {
          type: 'email',
          value: normalizedIdentity
        },
        nextScreen: 'ResetPassword',
      });
    }, 3500);
  };

  const { forgotPassword: forgotPasswordEmail, withEmailLoading } =
    useForgotPasswordEmail({ success: emailSuccess })

  const normalizedIdentity = identity.toLowerCase();
  const isEmail = schema.isValidSync({email: normalizedIdentity});
  const handleSubmit = () => {
    if (identity.length === 0) {
      setIdentityError('Phone or Email is required');
    }
    if (isEmail) {
      forgotPasswordEmail({email: normalizedIdentity})
    } else {
      const isPhone = schema.isValidSync({phone: normalizedIdentity});
      if (isPhone) {
        const phone = IntlFormat(normalizedIdentity);
        forgotPasswordPhone({phone})
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
      <KeyboardAvoidingView behavior='height'>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            loading={withPhoneLoading || withEmailLoading}
            onPress={() => handleSubmit()}
            label="Reset Password"
            style={styles.button}
          />
        </ScrollView>
      </KeyboardAvoidingView>
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
