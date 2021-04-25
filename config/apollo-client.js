import { ApolloClient, InMemoryCache } from '@apollo/client';

export const SERVER_URI = 'http://localhost:1337';

const client = new ApolloClient({
  uri: `${SERVER_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
