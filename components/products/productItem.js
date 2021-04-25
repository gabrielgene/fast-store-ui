import styled from 'styled-components';
import ProductImage from '~/components/product-image';
import { Text14, Text18 } from '~/components/text';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  padding: 16px;
`;

const StyledImage = styled(ProductImage)`
  border-radius: 6px;
`;


export default function ProductItem({ image, name, price, id }) {
  const router = useRouter();

  return (
    <Wrapper>
      <StyledImage
        onClick={() => router.push(`produto/${id}`)}
        src={image[0].url}
        width={162}
        height={184}
      />
      <Text18 style={{ fontWeight: 900 }}>{name}</Text18>
      <Text14>R$ {`${price.toFixed(2)}`.replace('.', ',')}</Text14>
    </Wrapper>
  );
}
