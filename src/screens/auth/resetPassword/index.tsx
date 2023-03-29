/* eslint-disable @typescript-eslint/no-use-before-define */
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '~types/navigation';
import { useTheme, Text } from 'react-native-paper';
// import IntlFormat from '~utils/phone';
import SafeAreaScreen from '~components/SafeAreaScreen';
import VerificationSvg from '~components/svg/verification';
import ResetPasswordForm from '~components/form/ResetPassword';
import { ResetPasswordInput } from '~types';
import CustomHeader from '~components/CustomHeader';
import BackButtonSvg from '~components/svg/backbutton';
import useResetPasswordPhone from '~hooks/api/useResetPasswordPhone';
import { showMessage } from 'react-native-flash-message';

export default function ResetPassword ({
  navigation,
  route: {
    params: {data: {type, value: {data, otp}}}
  }
}: RootStackScreenProps<'ResetPassword'>) {
  const { colors } = useTheme();
  
  const submitForm = ({ password }: ResetPasswordInput) => {
    if (type === 'phone') {
      resetPasswordPhone({phone: data, otp, newPassword: password});
    } else if (type === 'email') {
      // resetPasswordEmail({email: data, otp, newPassword});
    }
  }

  const success = (msg: string) => {
    showMessage({
      message: 'New Password Created',
      description: msg,
      type: 'default'
    });
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Onboarding'}],
      });
    }, 3500);
  };

  const {resetPassword: resetPasswordPhone, loading: withPhoneLoading} =
    useResetPasswordPhone({success});

  // const {resetPassword: resetPasswordEmail, loading: withEmailLoading} =
  //   useResetPasswordEmail({success});

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
            <VerificationSvg />
          </View>
          <View style={styles.textWrapper}>
            <Text
              variant='headlineMedium'
              style={[styles.title, { color: colors.onBackground }]}
            >
              Create New Password
            </Text>
            <Text
              variant='bodyMedium'
              style={[styles.desc, { color: colors.onSecondary }]}
            >
              Your new password must be different from previously used password
            </Text>
          </View>
          <ResetPasswordForm
            submitForm={submitForm}
            loading={withPhoneLoading}
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
    marginTop: 32,
    marginBottom: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  desc: {
    textAlign: 'center',
  },
  input: {
    marginVertical: 12,
  },
  button: {
    marginTop: 32,
  },
});
