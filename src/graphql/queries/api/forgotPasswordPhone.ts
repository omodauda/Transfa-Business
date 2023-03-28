import { gql } from "~__generated__";

export default gql(`
  mutation ForgotPasswordPhone($input: PhoneInput!) {
    forgotPasswordPhone(input: $input) {
      message
    }
  }
`)