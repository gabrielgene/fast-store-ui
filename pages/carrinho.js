import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useCart } from 'react-use-cart';
import { floatToPrice } from '~/utils/price';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import { Text34, Text18 } from '~/components/text';
import CartList from '~/components/cart-list';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export default function Cart() {
  const router = useRouter();
  const cart = useCart();
  const { items, cartTotal } = cart;

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Carrinho</Text34>
        <div>{items.length !== 0 && <CartList items={items} />}</div>
        <Price>
          <Text18 style={{ color: '#9B9B9B' }}>Valor total:</Text18>
          <Text18 style={{ fontWeight: 'bold' }}>
            {floatToPrice(cartTotal)}
          </Text18>
        </Price>
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Continuar" onClick={() => router.push('/entrega')} />
        </Fixed>
      </div>
    </>
  );
}
