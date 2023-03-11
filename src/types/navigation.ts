import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Verification: undefined;
  ResetPassword: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;