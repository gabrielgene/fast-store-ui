import { useMutation } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { useCart } from 'react-use-cart';
import { floatToPrice } from '~/utils/price';

import { CREATE_USER_PAYMENT, CREATE_ORDER } from '~/apollo/mutations';

import { Text34, Text14, Text18 } from '~/components/text';
import Navigation from '~/components/navigation';
import Button from '~/components/button';
import CartList from '~/components/cart-list';

const Page = styled.div`
  padding: 0 16px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export default function Cart() {
  const cart = useCart();
  const { items, cartTotal } = cart;
  const [createUserPayment, { data }] = useMutation(CREATE_USER_PAYMENT);
  const [createOrder, order] = useMutation(CREATE_ORDER);

  React.useEffect(() => {
    if (data) {
      const { register, createPayment } = data;
      createOrder({
        variables: {
          user: register.user.id,
          products: items.map((i) => i.id),
          payment: createPayment.payment.id,
          value: cartTotal,
          status: 'PENDING',
        },
      });
    }
  }, [data]);

  const handleSubmit = () => {
    createUserPayment({
      variables: {
        username: 'client13',
        email: 'client13@gmail.com',
        password: '1234',
        externalReference: '1234',
        status: 'PENDING',
      },
    });
  };

  return (
    <>
      <Page>
        <Text34 style={{ marginTop: 18, marginBottom: 18 }}>Carrinho</Text34>
        <div>{items.length !== 0 && <CartList items={items} />}</div>
        <Price>
          <Text14 style={{ color: '#9B9B9B' }}>Valor total:</Text14>
          <Text18>{floatToPrice(cartTotal)}</Text18>
        </Price>
        <Button text="Comprar" onClick={handleSubmit} />
        <div style={{ marginBottom: 84 }} />
      </Page>
      <Navigation />
    </>
  );
}
