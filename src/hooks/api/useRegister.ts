import { useMutation } from '@apollo/client';
import client from '~graphql/client';
import register from '~graphql/queries/api/register';
import AUTH_STATE from '~graphql/queries/app';
import { RegisterBusinessInput } from '~__generated__/graphql';

export default function useRegister() {
  const [mutate, { loading }] = useMutation(register, {
    onCompleted: result => {
      if (result.registerBusiness.token) {
        const { token } = result.registerBusiness;
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
  });

  const signUp = (input: RegisterBusinessInput) =>
    mutate({
      variables: {
        input
      }
    })

  return {
    signUp,
    loading
  }
}