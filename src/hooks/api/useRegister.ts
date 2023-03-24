import { useMutation } from '@apollo/client';
import register from '~graphql/queries/api/register';
import { RegisterBusinessInput } from '~__generated__/graphql';

export default function useRegister() {
  const [mutate, { loading }] = useMutation(register, {
    onCompleted: result => {
      console.log('register.result', result)
    },
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