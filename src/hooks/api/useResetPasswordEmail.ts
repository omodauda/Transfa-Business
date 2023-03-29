import { useMutation } from '@apollo/client';
import resetPasswordEmail from '~graphql/queries/api/resetPasswordEmail';
import { MutationHookProp } from '~types';
import { ResetPasswordWithEmailInput } from '~__generated__/graphql';

export default function useResetPasswordEmail({ success }: MutationHookProp) {
  const [mutate, { loading }] = useMutation(resetPasswordEmail, {
    onCompleted: result => {
      success(result.resetPasswordWithEmail.message);
    },
    onError: () => { }
  });

  const resetPassword = ({
    otp,
    email,
    newPassword,
  }: ResetPasswordWithEmailInput) =>
    mutate({
      variables: {
        input: {
          email,
          otp,
          newPassword,
        },
      },
    });

  return {
    resetPassword,
    loading,
  };
}
