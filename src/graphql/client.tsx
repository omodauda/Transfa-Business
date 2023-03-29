import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from '@apollo/client';
import { CachePersistor, AsyncStorageWrapper } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onError} from '@apollo/client/link/error'
import { showMessage } from 'react-native-flash-message';
import { AuthState } from '~types';
import AUTH_STATE from './queries/app';


export const cache = new InMemoryCache();

export const persistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage)
})

const httpLink = new HttpLink({
  uri: 'https://transfa-staging.fly.dev/graphql'
})

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const data = cache.readQuery<{ auth: AuthState }>({ query: AUTH_STATE });
    const accessToken = data?.auth?.accessToken;
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : ''
      }
    }
  })
  return forward(operation)
})

const errorLink = onError(({graphQLErrors}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach?.(e => {
      showMessage({
        message: 'Error',
        description: e.message,
        type: 'default',
      });
    });
  }
});

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache
})

export default client