import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useCart } from 'react-use-cart';
import { Text34 } from '~/components/text';
import Navigation from '~/components/navigation';
import Button from '~/components/button';
import { CREATE_USER_PAYMENT, CREATE_ORDER } from './mutations';

const Title = styled(Text34)`
  margin-top: 40px;
`;

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
        <CartItem key={i.id} {...i} />
      ))}
    </>
  );
}

function CartItem({ name, itemTotal, quantity }) {
  return (
    <ItemWrapper>
      <div>{name}</div>
      <div>Preço: {itemTotal}</div>
      <div>Quantidade: {quantity}</div>
    </ItemWrapper>
  );
}

export default function Carrinho() {
  const { items, cartTotal } = useCart();
  const [createUserPayment, { data }] = useMutation(CREATE_USER_PAYMENT);
  const [createOrder, order] = useMutation(CREATE_ORDER);

  console.log(data, 'HERE')
  console.log(order, 'ORDER')

  React.useEffect(() => {
    if (data) {
      const {register, createPayment} = data;
      createOrder({
        variables: {
          user: register.user.id,
          products: items.map((i) => i.id),
          payment: createPayment.payment.id,
          value: cartTotal,
          status: 'PENDING'
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
    <Page>
      <Title>Carrinho</Title>
      <div>{items.length !== 0 && <ItemsList items={items} />}</div>
      <Price>Preço: {cartTotal}</Price>
      <Button text="Comprar" onClick={handleSubmit} />
      <Navigation />
    </Page>
  );
}
