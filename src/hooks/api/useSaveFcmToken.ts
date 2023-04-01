import { useMutation } from '@apollo/client';
import saveDeviceToken from '~graphql/queries/api/saveFcmToken';
import { SaveUserDeviceIdInput } from '~__generated__/graphql';

export default function useSaveFcmToken() {
  const [mutate] = useMutation(saveDeviceToken, {
    onError: () => { },
  });

  const saveToken = ({ token }: SaveUserDeviceIdInput) => {
    mutate({
      variables: {
        input: {
          token,
        },
      },
    });
  };

  return {
    saveToken,
  };
}
