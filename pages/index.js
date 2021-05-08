import styled from 'styled-components';
import client from '~/apollo/client';
import { ALL_PRODUCTS } from '~/apollo/queries';
import Topbar from '~/components/topbar';
import { Text34 } from '~/components/text';
import ProductList from '~/components/product-list';

const Wrapper = styled.div`
  padding: 16px;
`;

export default function Products({ products }) {

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34>Produtos</Text34>
        <ProductList products={products} />
      </Wrapper>
    </>
  );
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: ALL_PRODUCTS,
  });

  return {
    props: { products: data.products },
    revalidate: 60,
  };
}
