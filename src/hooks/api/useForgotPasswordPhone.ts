import { useMutation } from "@apollo/client"
import forgotPasswordPhone from "~graphql/queries/api/forgotPasswordPhone"
import { MutationHookProp } from "~types"
import { PhoneInput } from "~__generated__/graphql"

export default function useForgotPasswordPhone({ success }: MutationHookProp) {
  const [mutate, { loading }] = useMutation(forgotPasswordPhone, {
    onCompleted: result => {
      success(result.forgotPasswordPhone.message)
    },
    onError: () => { }
  })

  const forgotPassword = ({ phone }: PhoneInput) =>
    mutate({
      variables: {
        input: {
          phone
        }
      }
    })

  return {
    forgotPasswordPhone: forgotPassword,
    loading
  }
}