import styled from 'styled-components';
import ProductItem from '~/components/product-item';

const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ProductList({ products }) {
  return (
    <Wrapper>
      {products.map((p) => (
        <ProductItem style={{ marginBottom: 24 }} {...p} key={p.id} />
      ))}
    </Wrapper>
  );
}
