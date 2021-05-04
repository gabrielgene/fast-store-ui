import axios from 'axios';

const cepApiInstance = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v1',
});

cepApiInstance.defaults.timeout = 30000;

export default async function getLocationByCep(cep) {
  const result = await cepApiInstance(`/${cep}`);
  return result.data;
}
