import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '~/components/button';
import Input from '~/components/input';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import { Text34 } from '~/components/text';
import login from '~/services/login';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

export default function Login() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const [values, setValues] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');

  const disabled = !values.email || !values.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    login(values)
      .then(() => {
        router.push('/meus-pedidos');
        setError('');
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError('Usuario ou senha incorretos');
      });
  };

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Entrar</Text34>
        <Input
          error={!!error}
          label="E-mail"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <Input
          error={!!error}
          label="Senha"
          name="password"
          onChange={handleChange}
          value={values.password}
          type="password"
          helperText={error}
        />
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button
            loading={loading}
            disabled={disabled}
            onClick={loading ? () => {} : handleSubmit}
            text="Entrar"
          />
        </Fixed>
      </div>
    </>
  );
}
