import styled from 'styled-components';
import CartItem from '~/components/cart-item';

const ItemWrapper = styled.div`
  margin-bottom: 24px;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background: #ffffff;
`;

export default function CartList({ items }) {
  return (
    <div>
      {items.map((i) => (
        <ItemWrapper key={i.id}>
          <CartItem {...i} />
        </ItemWrapper>
      ))}
    </div>
  );
}
