import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client';
import { CachePersistor, AsyncStorageWrapper } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const cache = new InMemoryCache();

export const persistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage)
})

const httpLink = new HttpLink({
  uri: 'https://transfa-staging.fly.dev/graphql'
})

const client = new ApolloClient({
  link: from([httpLink]),
  cache
})

export default client