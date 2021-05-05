import React from 'react';
import styled from 'styled-components';
import client from '~/apollo/client';
import { GET_ORDERS } from '~/apollo/queries';
import Topbar from '~/components/topbar';
import { Text34 } from '~/components/text';
import cookie from 'cookie';
import OrderCard from '~/components/order-card';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

export default function MyOrders({ orders }) {
  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Meus Pedidos</Text34>
        <div>
          {orders.map((o) => (
            <OrderCard key={o.id} order={o} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export async function getServerSideProps({ req, res}) {
  if (req) {
    const { jwt } = cookie.parse(req.headers.cookie);
    if (jwt) {
      const { data } = await client.query({
        query: GET_ORDERS,
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      });

      return { props: { orders: data.self.orders } };
    } else {
      res.setHeader('location', '/');
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }
  }
}
