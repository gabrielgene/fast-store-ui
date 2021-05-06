import { ApolloClient, InMemoryCache } from '@apollo/client';

const HOST = 'http://localhost';
const HOST2 = 'http://165.227.67.133:1337';
const HOST3 = 'https://admin.beandare.com.br'
const HOST4 = 'http://localhost:1337';

export const SERVER_URI = `${HOST3}`;
export const LOCAL_URI = `${HOST}:3000`;
export const LOCAL_SERVER = `${HOST3}`;

const client = new ApolloClient({
  ssrMode: true,
  uri: `${LOCAL_SERVER}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
