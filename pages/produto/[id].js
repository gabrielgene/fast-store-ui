import { gql } from '@apollo/client';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import client from '~/config/apollo-client';
import Header from '~/components/header';
import ProductGrid from '~/components/product-grid';
import ProductInfo from '~/components/product-info';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import { initializeApollo, addApolloState } from '~/utils/apolloClient'


export default function Product({ product }) {
  const { name, image, id, price } = product;
  const { addItem } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addItem({ id, price, name, image })
    router.push('/carrinho');
  }

  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <Header title={name} back />
      <ProductGrid images={image} />
      <ProductInfo product={product} />
      <Fixed>
        <Button
          text="Adicionar ao carrinho"
          onClick={handleAdd}
        />
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
  // const apolloClient = initializeApollo()

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
  // console.log(data, 'HERE')
  return { props: data, revalidate: 1 };
}
// https://github.com/vercel/next.js/blob/fc538790ecbedc98fb3e35accbf9c76edcf70030/examples/with-apollo/lib/apolloClient.js#L61
