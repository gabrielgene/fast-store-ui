import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import { floatToPrice } from '~/utils/price';
import ProductImage from '~/components/product-image';
import { Text16, Text11, Text14 } from '~/components/text';
import CartButtom from '~/components/cart-buttom';

const Wrapper = styled.div`
  height: 104px;
  display: flex;
  width: 100%;
`;

const StyledProductImage = styled(ProductImage)`
  border-radius: 6px 0px 0px 6px;
`;

const Info = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 104px);
`;

const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
`;

export default function CartItem({
  name,
  itemTotal,
  quantity,
  image,
  id,
  size,
}) {
  const { updateItemQuantity } = useCart();
  return (
    <Wrapper>
      <div style={{ width: 104 }}>
        <StyledProductImage
          src={image[0].url}
          width={104}
          height={104}
          objectFit="cover"
        />
      </div>
      <Info>
        <Text16 style={{ fontWeight: 500 }}>{name}</Text16>
        <div style={{ display: 'flex' }}>
          <Text11 style={{ marginRight: 4 }}>Tamanho:</Text11>
          <Text11 style={{ color: '#333333' }}>{size}</Text11>
        </div>
        <InfoFooter>
          <Counter>
            <CartButtom
              icon="remove"
              onClick={() => updateItemQuantity(id, quantity - 1)}
            />
            <Text14
              style={{ marginRight: 8, marginLeft: 8, fontWeight: 'normal' }}
            >
              {quantity}
            </Text14>
            <CartButtom
              icon="add"
              onClick={() => updateItemQuantity(id, quantity + 1)}
            />
          </Counter>
          <Text14>{floatToPrice(itemTotal)}</Text14>
        </InfoFooter>
      </Info>
    </Wrapper>
  );
}
