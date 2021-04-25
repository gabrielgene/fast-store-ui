import { ApolloClient, InMemoryCache } from '@apollo/client';

export const SERVER_URI = 'http://localhost:1337/graphql';

const client = new ApolloClient({
  uri: SERVER_URI,
  cache: new InMemoryCache(),
});

export default client;
