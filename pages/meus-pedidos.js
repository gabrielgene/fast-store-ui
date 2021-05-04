import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import client from '~/apollo/client';
import { GET_ORDERS } from '~/apollo/queries';
import Topbar from '~/components/topbar';
import { Text34 } from '~/components/text';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

export default function MyOrders({ orders }) {
  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Meus Pedidos</Text34>
        {/* {orders.map((o) => (
          <div>{o.id}</div>
        ))} */}
      </Wrapper>
    </>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
// export async function getStaticProps(context) {
//   if (context.req) {
//     console.log(context.req);
//   }

//   console.log(context);
//   const { data } = await client.query({
//     query: GET_ORDERS,
//   });

//   console.log(data);

//   return {
//     props: { orders: data.selfie.orders },
//     revalidate: 1,
//   };
// }
