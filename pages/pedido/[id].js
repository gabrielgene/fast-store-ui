import cookie from 'cookie';
import { floatToPrice } from '~/utils/price';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';
import ClientOnly from '~/components/client-only';
import OrderItem from '~/components/order-item';
import { Text14 } from '~/components/text';
import client from '~/apollo/client';
import { GET_ORDER_BY_ID } from '~/apollo/queries';
import Topbar from '~/components/topbar';

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding: 16px 24px;
`;

export default function Order({ order }) {
  const { id, created_at, order_items, status, value } = order;

  return (
    <>
      <Topbar back={true} />
      <Wrapper>
        <Line style={{ marginBottom: 8 }}>
          <Text14>Pedido: #{id}</Text14>
          <ClientOnly>
            <Text14 style={{ fontWeight: 'normal' }}>
              <FormattedDate
                value={new Date(created_at)}
                year="numeric"
                month="numeric"
                day="2-digit"
              />
            </Text14>
          </ClientOnly>
        </Line>
        <Line style={{ marginBottom: 8 }}>
          <Text14 style={{ textTransform: 'capitalize', fontWeight: 'normal' }}>
            {status.toLowerCase()}
          </Text14>
        </Line>
        <div style={{ marginTop: 24 }}>
          {order_items.map((o) => (
            <OrderItem
              key={o.id}
              {...o.product}
              amount={o.amount}
              value={o.value}
            />
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <Text14 style={{ fontWeight: 'normal', marginRight: 8 }}>
            Total:
          </Text14>
          <Text14>{floatToPrice(value)}</Text14>
        </div>
      </Wrapper>
    </>
  );
}

export async function getServerSideProps({ params, req, res }) {
  if (req) {
    const { jwt } = cookie.parse(req.headers.cookie);
    if (jwt) {
      const { data } = await client.query({
        query: GET_ORDER_BY_ID,
        variables: { id: params.id },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      });

      return { props: { order: data.self.orders[0] } };
    } else {
      res.setHeader('location', '/');
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }
  }
}
