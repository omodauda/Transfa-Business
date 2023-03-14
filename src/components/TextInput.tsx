/* eslint-disable @typescript-eslint/no-use-before-define */
import { NativeSyntheticEvent, Pressable, StyleSheet, TextInput, TextInputFocusEventData, TextInputProps, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import {Feather} from '@expo/vector-icons'

interface Props extends TextInputProps {
  password?: boolean;
  label?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: boolean;
  errorMessage?: string;
  // onEditPress?: () => void;
}

function CustomTextInput ({
  password,
  label,
  onBlur,
  error,
  errorMessage,
  // onEditPress,
  style,
  placeholder,
  onChangeText,
  value,
  editable,
  keyboardType,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus
}: Props) {
  const { colors } = useTheme()
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [borderColor, setBorderColor] = useState('#E5E5E5')

  const handleOnBlur = () => {
    setBorderColor('#E5E5E5')
  }

  const togglePasswordVisibility = () => {
    setPasswordHidden(prevState => !prevState)
  }

  return (
    <View style={[styles.inputSection, style]}>
      {
        label && (
          <Text variant='labelSmall' style={[styles.label, { color: colors.surfaceDisabled }]}>
            {label}
          </Text>
        )
      }
      {
        password && (
          <View style={[styles.inputContainer, {borderColor: error ? colors.error : borderColor}]}>
            <TextInput
              onFocus={() => setBorderColor(colors.primary)}
              accessibilityLabel={label}
              onBlur={error ? onBlur : handleOnBlur}
              secureTextEntry={passwordHidden}
              style={[styles.input, {color: colors.onBackground}]}
              cursorColor={colors.primary}
              autoCapitalize='none'
              onChangeText={onChangeText}
              value={value}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Feather size={16} name={passwordHidden ? 'eye-off' : 'eye'} /> 
            </Pressable>
          </View>
        )
      }
      {
        !password && !editable && (
          <View style={[styles.inputContainer, {borderColor: error ? colors.error : borderColor}]}>
            <TextInput
              onFocus={() => setBorderColor(colors.primary)}
              accessibilityLabel={label}
              onBlur={error ? onBlur : handleOnBlur}
              style={[styles.input, {color: colors.onBackground}]}
              cursorColor={colors.primary}
              autoCapitalize={autoCapitalize}
              onChangeText={onChangeText}
              value={value}
              autoComplete={autoComplete}
              autoCorrect={autoCorrect}
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={colors.surfaceDisabled}
            />
          </View>
        )
      }
      {
        error && (
          <View style={styles.errorView}>
            <Text style={{color: colors.error}}>{errorMessage}</Text>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 16
  },
  label: {
    marginBottom: 4
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: '100%',
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  errorView: {
    marginTop: 5
  }
})

export default CustomTextInput;