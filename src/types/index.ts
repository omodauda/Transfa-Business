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