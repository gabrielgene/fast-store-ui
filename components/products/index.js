import styled from 'styled-components';
import ProductItem from '../product-item';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export default function Products({ products }) {
  return (
    <Wrapper>
      {products.map((p) => (
        <ProductItem {...p} key={p.id} />
      ))}
    </Wrapper>
  );
}
