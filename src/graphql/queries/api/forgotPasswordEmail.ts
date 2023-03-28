import { gql } from "~__generated__";

export default gql(`
  mutation ForgotPasswordEmail($input: EmailInput!) {
    forgotPasswordEmail(input: $input) {
      message
    }
  }
`)