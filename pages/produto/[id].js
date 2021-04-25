import { gql } from '@apollo/client';
import client from '~/config/apollo-client';
import Header from '~/components/header';
import ProductGrid from '~/components/product-grid';
import ProductInfo from '~/components/product-info';
import Button from '~/components/button';
import Fixed from '~/components/fixed';

export default function Product({ product }) {
  const { name, image } = product;
  return (
    <div style={{ backgroundColor: '#F9F9F9'  }}>
      <Header title={name} back />
      <ProductGrid images={image} />
      <ProductInfo product={product} />
      <Fixed>
        <Button text="Adicionar ao carrinho" />
      </Fixed>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Product($id: ID!) {
        product(id: $id) {
          id
          name
          price
          image {
            url
          }
        }
      }
    `,
    variables: { id: params.id },
  });
  return { props: data, revalidate: 1 };
}
