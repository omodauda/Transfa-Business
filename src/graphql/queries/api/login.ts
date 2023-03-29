import { gql } from "~__generated__";

export default gql(`
  mutation Login($input: LoginWithEmailInput!) {
    loginBusiness(input: $input) {
      token
    }
  }
`)