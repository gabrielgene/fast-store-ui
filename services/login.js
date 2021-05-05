import strapiInstance from './instance';
import Cookies from 'js-cookie';

export default async function login({ email, password }) {
  const result = await strapiInstance.post('/auth/local', {
    identifier: email,
    password: password,
  });

  Cookies.set('jwt', result.data.jwt);

  return result.data;
}
