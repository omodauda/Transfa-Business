/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '~components/Button';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import { RootStackScreenProps } from '~types/navigation';
import { useTheme, Text } from 'react-native-paper';
// import IntlFormat from '~utils/phone';
import SafeAreaScreen from '~components/SafeAreaScreen';
import VerificationSvg from '~components/svg/verification';
import CustomHeader from '~components/CustomHeader';
import BackButtonSvg from '~components/svg/backbutton';

const CELL_COUNT = 4;

export default function Verification({
  navigation,
  route: {
    params: {medium, nextScreen, prevScreen, data},
  },
}: RootStackScreenProps<'Verification'>) {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const refTimer = useRef<any>();

  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallback = (timerFlag: boolean) => {
    setTimerEnd(timerFlag);
  };

  const handleVerify = () => {
    if (nextScreen === 'ResetPassword') {
      // navigation.navigate(nextScreen, {
      //   extended: {
      //     type: extended!.type,
      //     data: {otp: value, data: extended!.data},
      //   },
      // });
    } else if (nextScreen === 'Profile') {
      // if (prevScreen === 'ChangePhone') {
      //   const newPhone = intlFormat(extended!.data);
      //   resetPhone({otp: value, newPhone});
      // }
      // if (prevScreen === 'ChangeEmail') {
      //   resetEmail({otp: value, newEmail: extended!.data});
      // }
    }
  };

  const handleResendCode = () => {
    if (data?.type === 'phone' && prevScreen === undefined) {
      // const phone = IntlFormat(data.value);
      // forgotPasswordPhone({phone});
    }
    if (data?.type === 'email' && prevScreen === undefined) {
      // forgotPasswordEmail({email: data.value});
    }
    if (prevScreen === 'changePhone') {
      // const phone = IntlFormat(data!.value);
      // resendPhoneOtp({phone});
    }
    if (prevScreen === 'changeEmail') {
      // resendEmailOtp({email: data?.value});
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
        <VerificationSvg />
      </View>
      <View style={styles.textWrapper}>
        <Text
          variant='headlineMedium'
          style={[styles.title, {color: colors.onBackground}]}>
          Enter OTP Code
        </Text>
        <Text
          variant='bodyMedium'
          style={[styles.desc, {color: colors.onSecondary}]}>
          Enter the 4-digit OTP code sent to your {medium}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                variant='headlineMedium'
                style={[
                  styles.cell,
                  {
                    borderColor: isFocused
                      ? colors.primary
                      : colors.onSecondary,
                    color: colors.primary,
                  },
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
      <Button
        // loading={resetPhoneLoading || resetEmailLoading}
        onPress={handleVerify}
        label="Verify"
        style={styles.button}
        disabled={value.length < 4}
      />

      <CountDownTimer
        ref={refTimer}
        timestamp={300}
        timerCallback={timerCallback}
        containerStyle={styles.timer}
        textStyle={[styles.time, {color: colors.primary}]}
      />

      <View style={styles.footer}>
        <Text
          variant='bodyMedium'
          style={[styles.terms, {color: colors.onSecondary}]}>
          Didn&apos;t get an OTP?{' '}
        </Text>
        <TouchableWithoutFeedback
          disabled={!timerEnd}
          onPress={() => {
            handleResendCode();
            setTimerEnd(false);
            refTimer.current.resetTimer();
          }}>
          <Text
            variant='bodyMedium'
            style={[
              {color: timerEnd ? colors.primary : colors.onSecondary},
            ]}>
            Resend code
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 26,
  },
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
  cell: {
    width: 60,
    height: 60,
    borderRadius: 8,
    lineHeight: 60,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 12,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 40,
  },
  terms: {
    textAlign: 'center',
    marginTop: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  timer: {
    marginTop: 15,
  },
  time: {
    letterSpacing: 5,
    textAlign: 'center',
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
  },
});

