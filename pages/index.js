import client from '~/apollo/client';
import { GET_PRODUCTS } from '~/apollo/queries';

import Header from '~/components/header';
import ProductsList from '~/components/products';
import Navigation from '~/components/navigation';

export default function Home({ products }) {
  return (
    <div>
      <Header title="Produtos" />
      <ProductsList products={products} />
      <Navigation />
    </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      products: data.products,
    },
    revalidate: 1,
  };
}
