import { useRouter } from 'next/router';
import client from '~/apollo/client';
import { GET_PRODUCTS } from '~/apollo/queries';

import ActionTitle from '~/components/action-title';
import ProductCarousel from '~/components/product-carousel';
import Navigation from '~/components/navigation';

export default function Home({ newsProducts, notNewsProducts }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/produtos');
  };

  return (
    <div>
      <ActionTitle
        title="Produtos"
        subtitle="novidades ;)"
        actionText="Ver tudo"
        action={handleClick}
      />
      <ProductCarousel products={notNewsProducts} />
      <ActionTitle
        title="Novidades"
        subtitle="Você nunca viu isso antes!"
        actionText="Ver tudo"
        action={handleClick}
      />
      <ProductCarousel products={newsProducts} />
      <div style={{ marginBottom: 84 }} />
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
      newsProducts: data.newsProducts,
      notNewsProducts: data.notNewsProducts,
    },
    revalidate: 1,
  };
}
