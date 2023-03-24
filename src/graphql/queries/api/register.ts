import { gql } from "~__generated__";

export default gql(`
  mutation Register($input: RegisterBusinessInput!) {
    registerBusiness (input: $input) {
      token
    }
  }
`)