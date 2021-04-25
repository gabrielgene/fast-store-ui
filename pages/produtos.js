import Header from '~/components/header';
import ProductsList from '~/components/products';
import { gql } from '@apollo/client';
import client from '~/config/apollo-client';

export default function Products({ products }) {
  return (
    <div>
      <Header title="Produtos" />
      <ProductsList products={products} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          id
          name
          image {
            url
          }
          price
        }
      }
    `,
  });

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
