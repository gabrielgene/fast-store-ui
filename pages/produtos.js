import { useRouter } from 'next/router';
import client from '~/apollo/client';
import { ALL_PRODUCTS } from '~/apollo/queries';

import Topbar from '~/components/topbar';

import Header from '~/components/header';
import Filter from '~/components/filter';
import ProductList from '~/components/product-list';
import Navigation from '~/components/navigation';

export default function Products({ products }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/produtos');
  };

  return (
    <>
      <Topbar />
      <div style={{ marginBottom: 58 }} />
      <ProductList products={products} />
      <div style={{ marginBottom: 84 }} />
      <Navigation />
    </>
  );
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: ALL_PRODUCTS,
  });

  return {
    props: { products: data.products },
    revalidate: 1,
  };
}
