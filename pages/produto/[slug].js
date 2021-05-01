import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';

import client from '~/apollo/client';
import { GET_PRODUCT_BY_SLUG } from '~/apollo/queries';

import Header from '~/components/header';
import ProductImage from '~/components/product-image';
import ProductInfo from '~/components/product-info';
import Button from '~/components/button';
import Fixed from '~/components/fixed';

export default function Product({ product }) {
  const { name, image, id, price } = product;
  const { addItem } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addItem({ id, price, name, image });
    router.push('/sacola');
  };

  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <Header title={name} back />
      <div style={{ marginBottom: 58 }} />
      <ProductImage
        src={image[0].url}
        width={500}
        height={500}
        objectFit="cover"
      />
      <ProductInfo product={product} />
      <div style={{ marginBottom: 122 }} />
      <Fixed>
        <Button text="Adicionar a sacola" onClick={handleAdd} />
      </Fixed>
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug: params.slug },
  });
  console.log(data.productsConnection.values[0]);
  return { props: { product: data.productsConnection.values[0] } };
}
