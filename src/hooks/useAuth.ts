import { useQuery } from "@apollo/client";
import AUTH_STATE from "~graphql/queries/app";
import { AuthState } from "~types";

export default function useAuth() {
  const { data } = useQuery<{ auth: AuthState }>(AUTH_STATE);
  const token = data?.auth;

  return {
    ...token,
    isLoggedIn: !!token
  }
}