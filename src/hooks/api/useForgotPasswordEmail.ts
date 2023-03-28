import { useMutation } from "@apollo/client";
import forgotPasswordEmail from "~graphql/queries/api/forgotPasswordEmail";
import { MutationHookProp } from "~types";
import { EmailInput } from "~__generated__/graphql";

export default function useForgotPasswordEmail({ success }: MutationHookProp) {
  const [mutate, { loading }] = useMutation(forgotPasswordEmail, {
    onCompleted: result => {
      success(result.forgotPasswordEmail.message)
    },
    onError: () => { }
  })

  const forgotPassword = ({ email }: EmailInput) =>
    mutate({
      variables: {
        input: {
          email
        }
      }
    })

  return {
    forgotPassword,
    withEmailLoading: loading
  }
}