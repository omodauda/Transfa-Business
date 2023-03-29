import { gql } from "~__generated__";

export default gql(`
  query GetBusiness {
    getBusiness {
      status
      registrationNo
      phone
      email
      businessName
      riders {
        id
        status
        phone
        fullName
        bikeRegNo
        bikeImage
      }
    }
  }
`)