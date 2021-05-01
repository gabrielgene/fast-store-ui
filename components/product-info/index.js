import styled from 'styled-components';
import { Text24, Text11, Text14 } from '~/components/text';
import { floatToPrice } from '~/utils/price';

const Wrapper = styled.div`
  padding: 24px 16px 0 16px;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default function ProductInfo({
  product: { name, price, category, description },
}) {
  return (
    <Wrapper>
      <MainInfo>
        <div>
          <Text24>{name}</Text24>
          <Text11>{category}</Text11>
        </div>
        <Text24>{floatToPrice(price)}</Text24>
      </MainInfo>
      <Text14 style={{ fontWeight: 400    }}>{description}</Text14>
    </Wrapper>
  );
}
