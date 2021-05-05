import styled from 'styled-components';
import { FormattedDate } from 'react-intl';
import MUIButton from '@material-ui/core/Button';
import { Text18, Text14 } from '~/components/text';
import { floatToPrice } from '~/utils/price';
import { useRouter } from 'next/router';
import ClientOnly from '~/components/client-only';

const Wrapper = styled.div`
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled(MUIButton)`
  border-radius: 25px;
  color: #333333;
  height: 40px;
  text-transform: capitalize;
  font-family: 'Montserrat';
  border: 1px solid rgba(0, 0, 0, 0.5);
  &:hover {
    color: #333333;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  border-radius: 20px;
`;

export default function OrderCard({ order }) {
  const router = useRouter();
  const { id, value, created_at, status, order_items } = order;
  return (
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
        <Text14 style={{ fontWeight: 'normal' }}>
          Quantidade: {order_items.length}
        </Text14>
        <Text18>{floatToPrice(value)}</Text18>
      </Line>
      <Line style={{ alignItems: 'center' }}>
        <div>
          <Button
            onClick={() => router.push(`/pedido/${id}`)}
            variant="outlined"
            color="primary"
          >
            Detalhes
          </Button>
        </div>
        <Text18 style={{ textTransform: 'capitalize' }}>
          {status.toLowerCase()}
        </Text18>
      </Line>
    </Wrapper>
  );
}
