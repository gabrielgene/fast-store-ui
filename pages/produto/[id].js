import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';

import client from '~/apollo/client';
import { GET_PRODUCT_BY_ID } from '~/apollo/queries';

import Header from '~/components/header';
import ProductGrid from '~/components/product-grid';
import ProductInfo from '~/components/product-info';
import Button from '~/components/button';
import Fixed from '~/components/fixed';

export default function Product({ product }) {
  const { name, image, id, price } = product;
  const { addItem } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addItem({ id, price, name, image });
    router.push('/carrinho');
  };

  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <Header title={name} back />
      <ProductGrid images={image} />
      <ProductInfo product={product} />
      <Fixed>
        <Button text="Adicionar ao carrinho" onClick={handleAdd} />
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
    query: GET_PRODUCT_BY_ID,
    variables: { id: params.id },
  });
  return { props: data, revalidate: 1 };
}
