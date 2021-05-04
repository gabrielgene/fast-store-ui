import strapiInstance from './instance';

export default async function login({ email, password }) {
  const result = await strapiInstance.post('/auth/local', {
    identifier: email,
    password: password,
  });

  localStorage.setItem('jwt', result.data.jwt);

  return result.data;
}
