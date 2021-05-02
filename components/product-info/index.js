import styled from 'styled-components';
import { Text24, Text18, Text14, Text11 } from '~/components/text';
import { floatToPrice } from '~/utils/price';

const Wrapper = styled.div`
  margin-top: 16px;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  margin: 16px 0;
`;

export default function ProductInfo({
  product: { size, price, name, description },
}) {
  return (
    <Wrapper>
      <MainInfo>
        <Text18 style={{ fontWeight: 'normal' }}>{name}</Text18>
        <Text24>{floatToPrice(price)}</Text24>
      </MainInfo>
      <Text14 style={{ fontWeight: 'normal' }}>Tamanho: {size}</Text14>
      <Divider />
      <Text11 style={{ whiteSpace: 'pre' }}>{description}</Text11>
    </Wrapper>
  );
}
