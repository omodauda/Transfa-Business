/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, View, TouchableOpacity, StyleProp } from 'react-native'
import React from 'react'
import { useTheme, Text } from 'react-native-paper';
import Spinner from './Spinner'

type LabelStyleProps = {
  color?: string;
}

type DisabledStyleProps = {
  opacity: number;
}

type ButtonStyleProps = {
  width?: string | number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  marginTop?: number;
}

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  label: string;
  labelStyle?: StyleProp<LabelStyleProps>;
  style?: StyleProp<ButtonStyleProps>;
  spinnerColor?: string;
}

function Button({
  onPress,
  disabled,
  loading,
  label,
  labelStyle,
  style,
  spinnerColor
}: ButtonProps) {
  const { colors } = useTheme()
  const disabledStyle: DisabledStyleProps = {
    opacity: 0.7,
  }
  const buttonDisabled = !!(disabled || loading);
  const buttonDisabledStyle = disabled || loading ? disabledStyle : null;
  
  const renderSpinnerOrText = () => {
    if (loading) {
      return <Spinner color={spinnerColor} size={25} animating={loading} />
    }
    return (
      <Text
        variant='bodyMedium'
        style={[{
          color: disabled ? colors.onSurfaceDisabled : colors.onPrimaryContainer
        }, labelStyle]}>
        {label}
      </Text>
    )
  }

  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={buttonDisabled}
        style={[{backgroundColor: colors.primary}, styles.touchable, buttonDisabledStyle, style]}
      >
        <View style={styles.content}>
          {renderSpinnerOrText()}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 13
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default Button;