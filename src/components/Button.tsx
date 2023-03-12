import { StyleSheet, View, TouchableOpacity, ColorValue, StyleProp } from 'react-native'
import React from 'react'
import Spinner from './Spinner'
import { useTheme, Text } from 'react-native-paper';

type labelStyleProps = {
  color?: string;
}

type disabledStyleProps = {
  backgroundColor: string;
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
  labelStyle?: StyleProp<labelStyleProps>;
  style?: StyleProp<ButtonStyleProps>;
  spinnerColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  disabled,
  loading,
  label,
  labelStyle,
  style,
  spinnerColor
}) => {
  const { colors } = useTheme()
  const disabledStyle: disabledStyleProps = {
    backgroundColor: colors.surfaceDisabled,
    opacity: 0.8,
  }
  const buttonDisabled = disabled || loading ? true : false;
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