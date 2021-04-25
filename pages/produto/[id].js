import { gql } from '@apollo/client';
import client from '~/config/apollo-client';
import Header from '~/components/header';
import ProductGrid from '~/components/product-grid';
import Button from '~/components/button';
import Fixed from '~/components/fixed';

export default function Product({ product }) {
  const { name, image, price } = product;
  return (
    <div>
      <Header title={name} back />
      <ProductGrid images={image} />
      <div>{price}</div>
      <Fixed>
        <Button text="Adicionar ao carrinho" />
      </Fixed>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'full' } }],
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
  console.log(data);
  return { props: data, revalidate: 1 };
}
