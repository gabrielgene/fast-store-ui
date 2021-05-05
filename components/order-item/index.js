import styled from 'styled-components';
import { floatToPrice } from '~/utils/price';
import ProductImage from '~/components/product-image';
import { Text16, Text11 } from '~/components/text';

const Wrapper = styled.div`
  height: 126px;
  display: flex;
  width: 100%;
`;

const ItemWrapper = styled.div`
  margin-bottom: 24px;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background: #ffffff;
`;

const StyledProductImage = styled(ProductImage)`
  border-radius: 6px 0px 0px 6px;
`;

const Info = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 104px);
`;

export default function CartItem({ name, amount, value, size, imageUrl }) {
  return (
    <ItemWrapper>
      <Wrapper>
        <div style={{ width: 104 }}>
          <StyledProductImage
            src={imageUrl}
            width={104}
            height={126}
            objectFit="cover"
          />
        </div>
        <Info>
          <Text16 style={{ fontWeight: 500 }}>{name}</Text16>
          <div style={{ marginTop: 8 }}>
            <Text11 style={{ marginRight: 4 }}>Tamanho: {size}</Text11>
          </div>
          <div style={{ marginTop: 8 }}>
            <Text11 style={{ marginRight: 4 }}>Quantidade: {amount}</Text11>
          </div>
          <div style={{ marginTop: 8 }}>
            <Text11 style={{ fontWeight: 'bold' }}>
              Total: {floatToPrice(value)}
            </Text11>
          </div>
        </Info>
      </Wrapper>
    </ItemWrapper>
  );
}
