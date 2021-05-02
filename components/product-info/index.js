import styled from 'styled-components';
import { Text24, Text11, Text14 } from '~/components/text';
import { floatToPrice } from '~/utils/price';

const Wrapper = styled.div`
  margin-top: 16px;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
`;

export default function ProductInfo({ product: { size, price, category } }) {
  return (
    <Wrapper>
      <MainInfo>
        <Text14>Tamanho: {size}</Text14>
        <Text24>{floatToPrice(price)}</Text24>
      </MainInfo>
    </Wrapper>
  );
}
