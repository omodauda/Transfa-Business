import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Rider } from "~__generated__/graphql";

export type RootStackParamList = {
  Onboarding: undefined;
  SignUp: { step: number };
  Login: undefined;
  ForgotPassword: undefined;
  Verification: {
    medium: 'phone number' | 'email address';
    data: {
      type: 'email' | 'phone';
      value: string;
    };
    prevScreen?: 'changeEmail' | 'changePhone';
    nextScreen: 'ResetPassword' | 'Profile';
  };
  ResetPassword: {
    data: {
      type: 'email' | 'phone';
      value: {
        otp: string;
        data: string
      }
    }
  };
  Home: undefined;
  ListBike: undefined;
  BikeDetails: {
    rider: Rider
  };
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}