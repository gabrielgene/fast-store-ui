import styled from 'styled-components';
import { Text24 } from '~/components/text';
import { floatToPrice } from '~/utils/price';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px 0 16px;
  height: 400px;
`;

export default function ProductInfo({ product: { name, price } }) {
  return (
    <Wrapper>
      <Text24>{name}</Text24>
      <Text24>{floatToPrice(price)}</Text24>
    </Wrapper>
  );
}
