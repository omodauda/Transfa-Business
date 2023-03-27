import { gql } from "@apollo/client";

const AUTH_STATE = gql`
  query AuthState {
    auth @client {
      accessToken
    }
  }
`

export default AUTH_STATE