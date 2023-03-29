import { useMutation } from '@apollo/client';
import resetPasswordPhone from '~graphql/queries/api/resetPasswordPhone';
import { MutationHookProp } from '~types';
import { ResetPasswordWithPhoneInput } from '~__generated__/graphql';

export default function useResetPasswordPhone({ success }: MutationHookProp) {
  const [mutate, { loading }] = useMutation(resetPasswordPhone, {
    onCompleted: result => {
      success(result.resetPasswordWithPhone.message);
    },
    onError: () => { }
  });

  const resetPassword = ({
    phone,
    otp,
    newPassword,
  }: ResetPasswordWithPhoneInput) =>
    mutate({
      variables: {
        input: {
          phone,
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
