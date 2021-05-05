import cookie from 'cookie';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';
import ClientOnly from '~/components/client-only';
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
  const { id, created_at } = order;

  return (
    <>
      <Topbar />
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
      </Wrapper>
      <Topbar />
    </>
  );
}

export async function getServerSideProps({ params, req }) {
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
    }
  }
}
