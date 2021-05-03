import { ApolloClient, InMemoryCache } from '@apollo/client';

const HOST2 = 'http://localhost';
const HOST = 'http://165.227.67.133';

export const SERVER_URI = `${HOST}:1337`;
export const LOCAL_URI = `${HOST}:3000`;

const client = new ApolloClient({
  ssrMode: true,
  uri: `${SERVER_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
