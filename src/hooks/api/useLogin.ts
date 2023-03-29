import { useMutation } from "@apollo/client";
import client from "~graphql/client";
import login from "~graphql/queries/api/login";
import AUTH_STATE from "~graphql/queries/app";
import { LoginWithEmailInput } from "~__generated__/graphql";

export default function useLogin() {
  const [mutate, { loading }] = useMutation(login, {
    onCompleted: result => {
      if (result.loginBusiness.token) {
        const { token } = result.loginBusiness;
        client.writeQuery({
          query: AUTH_STATE,
          data: {
            auth: {
              accessToken: token
            }
          }
        })
      }
    },
    onError: () => { }
  })

  const Login = (input: LoginWithEmailInput) =>
    mutate({
      variables: {
        input
      }
    })

  return {
    login: Login,
    loading
  }
}