import { ImageSourcePropType } from "react-native";

export type JustifyContent =
  'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'

export type AlignItems =
  'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'

export type LoginInput = {
  email: string;
  password: string
}

export type RegistrationFormData = {
  businessName?: string;
  emailAddress?: string;
  password?: string;
  registrationNo?: string;
  businessAddress?: string;
}

export type ResetPasswordInput = {
  password: string
}

export interface Rider {
  id: string;
  registrationNo: string;
  status: RiderStatus;
  fullname: string;
  phone: string;
  image: ImageSourcePropType;
}

export enum RiderStatus {
  active = 'Active',
  inactive = 'Inactive'
}

export interface Order {
  id: string;
  rider: Rider;
  amount: number
}