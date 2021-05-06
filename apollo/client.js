import { ApolloClient, InMemoryCache } from '@apollo/client';

const HOST = 'http://localhost';
const HOST2 = 'http://165.227.67.133';

export const SERVER_URI = `${HOST2}:1337`;
export const LOCAL_URI = `${HOST}:3000`;

const client = new ApolloClient({
  ssrMode: true,
  uri: `${SERVER_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
