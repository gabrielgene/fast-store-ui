import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import client from '~/apollo/client';
import { GET_PRODUCT_BY_SLUG } from '~/apollo/queries';
import Topbar from '~/components/topbar';
import { Text34 } from '~/components/text';
import ProductImage from '~/components/product-image';
import ProductInfo from '~/components/product-info';
import Button from '~/components/button';
import Fixed from '~/components/fixed';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const StyledImage = styled(ProductImage)`
  border-radius: 6px;
  object-fit: cover;
`;

export default function Product({ product }) {
  const { imageUrl } = product;
  const { addItem } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addItem(product);
    router.push('/carrinho');
  };

  return (
    <>
      <Topbar back/>
      <Wrapper>
        <StyledImage
          src={imageUrl}
          width={500}
          height={500}
          objectFit="cover"
        />
        <ProductInfo product={product} />
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Adicionar ao carrinho" onClick={handleAdd} />
        </Fixed>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug: params.slug },
  });
  return { props: { product: data.productsConnection.values[0] } };
}
