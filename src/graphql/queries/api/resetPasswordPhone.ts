import { gql } from "~__generated__"

export default gql(`
  mutation ResetPasswordWithPhone($input: ResetPasswordWithPhoneInput!) {
    resetPasswordWithPhone(input: $input) {
      message
    }
  }
`)