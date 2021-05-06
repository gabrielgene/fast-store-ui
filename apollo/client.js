import { ApolloClient, InMemoryCache } from '@apollo/client';

const HOST = 'http://localhost';
const HOST2 = 'http://165.227.67.133:1337';
const HOST3 = 'https://admin.beandare.com.br'

export const SERVER_URI = `${HOST3}`;
export const LOCAL_URI = `${HOST}:3000`;

const client = new ApolloClient({
  ssrMode: true,
  uri: `${LOCAL_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
