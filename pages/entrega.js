import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useCart } from 'react-use-cart';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import Input from '~/components/input';
import { Text34 } from '~/components/text';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

export default function Delivery() {
  const router = useRouter();

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Entrega</Text34>
        <Input name="Name" />
        <Input name="E-mail" />
        <Input name="Password" type="password" />
        <Input name="CEP" />
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Continuar" onClick={() => router.push('/pagamento')} />
        </Fixed>
      </div>
    </>
  );
}
