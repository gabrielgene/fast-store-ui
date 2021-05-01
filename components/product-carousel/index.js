import styled from 'styled-components';
import ProductItem from '~/components/product-item';

const Wrapper = styled.div`
  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const ItemWrapper = styled.div`
  display: inline-block;
  text-decoration: none;
`;

const ProductItemCarousel = styled(ProductItem)`
  margin-left: 16px;
`;

export default function ProductCarousel({ products }) {
  return (
    <Wrapper>
      {products.map((p) => (
        <ItemWrapper key={p.id}>
          <ProductItemCarousel {...p} />
        </ItemWrapper>
      ))}
    </Wrapper>
  );
}
