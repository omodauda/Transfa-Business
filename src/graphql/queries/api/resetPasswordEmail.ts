import { gql } from "~__generated__";

export default gql(`
  mutation ResetPasswordEmail($input: ResetPasswordWithEmailInput!) {
    resetPasswordWithEmail(input: $input) {
      message
    }
  }
`)