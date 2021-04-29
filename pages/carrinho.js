import { useMutation } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { useCart } from 'react-use-cart';

import { CREATE_USER_PAYMENT, CREATE_ORDER } from '~/apollo/mutations';

import { Text34 } from '~/components/text';
import Navigation from '~/components/navigation';
import Button from '~/components/button';
import CartItem from '~/components/cart-item';

const Page = styled.div`
  padding: 0 16px;
`;

const ItemWrapper = styled.div`
  margin-top: 40px;
`;

const Price = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

function ItemsList({ items }) {
  return (
    <>
      {items.map((i) => (
        <ItemWrapper key={i.id}>
          <CartItem {...i} />
        </ItemWrapper>
      ))}
    </>
  );
}

export default function Carrinho() {
  const { items, cartTotal } = useCart();
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
        <Text34 style={{ marginTop: 48 }}>Carrinho</Text34>
        <div>{items.length !== 0 && <ItemsList items={items} />}</div>
        <Price>Preço: {cartTotal}</Price>
        <Button text="Comprar" onClick={handleSubmit} />
      </Page>
      <Navigation />
    </>
  );
}
