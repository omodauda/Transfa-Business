import { gql } from "~__generated__";

export default gql(`
  mutation SaveFcmToken($input: SaveUserDeviceIdInput!) {
    saveUserDeviceId(input: $input) {
      message
    }
  }
`)