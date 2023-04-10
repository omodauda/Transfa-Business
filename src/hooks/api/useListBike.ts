import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import client from "~graphql/client";
import useAuth from "~hooks/useAuth";
import getBusiness from '~graphql/queries/api/getBusiness'
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "~types/navigation";

const API_URL = 'https://transfa-staging.fly.dev/v1/business/list-bike';

export default function useListBike() {
  const [loading, setLoading] = useState<boolean>(false);
  const { accessToken } = useAuth();
  const navigation = useNavigation<RootStackScreenProps<'ListBike'>['navigation']>();

  const listBike = async (payload: any) => {
    setLoading(true)
    const result = await fetch(API_URL, {
      method: 'POST',
      body: payload,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`
      }
    });
    setLoading(false)
    const response = await result.json()
    if (!response.status) {
      showMessage({
        message: 'Error',
        description: response.message,
        type: 'default',
      })
    } else {
      showMessage({
        message: 'Success',
        description: response.message,
        type: 'default',
      })
      await client.refetchQueries({
        include: [getBusiness]
      })
      navigation.navigate('Home')
    }
  }

  return {
    loading,
    listBike,
  }
}