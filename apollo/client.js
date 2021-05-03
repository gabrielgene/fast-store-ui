import { ApolloClient, InMemoryCache } from '@apollo/client';

// export const SERVER_URI = 'http://localhost:1337';
export const SERVER_URI = 'http://165.227.67.133:1337/'

const client = new ApolloClient({
  ssrMode: true,
  uri: `${SERVER_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
