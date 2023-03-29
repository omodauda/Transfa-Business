import { useQuery } from "@apollo/client";
import getBusiness from "~graphql/queries/api/getBusiness";

export default function useGetBusiness() {
  const { loading, data, error, refetch } = useQuery(getBusiness, {
    fetchPolicy: 'network-only',
    onError: () => { }
  })

  return {
    loading,
    error,
    data: data?.getBusiness,
    refetch
  }
}