import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client';
import { CachePersistor, AsyncStorageWrapper } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onError} from '@apollo/client/link/error'
import { showMessage } from 'react-native-flash-message';


export const cache = new InMemoryCache();

export const persistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage)
})

const httpLink = new HttpLink({
  uri: 'https://transfa-staging.fly.dev/graphql'
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
  link: from([errorLink, httpLink]),
  cache
})

export default client