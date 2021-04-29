import styled from 'styled-components';
import { useRouter } from 'next/router';
import { floatToPrice } from '~/utils/price';
import ProductImage from '~/components/product-image';
import { Text11, Text14, Text16 } from '~/components/text';
import Badge from '~/components/badge';
import If from '~/components/if';

const Wrapper = styled.div`
  margin-left: 16px;
  position: relative;
`;

const StyledImage = styled(ProductImage)`
  border-radius: 6px;
`;

const ProductBadge = styled(Badge)`
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 8px;
`;

export default function ProductItem({
  image,
  name,
  price,
  id,
  category,
  news,
}) {
  const router = useRouter();

  return (
    <Wrapper>
      <If condition={!!news}>
        <ProductBadge text="NEWS" />
      </If>
      <StyledImage
        onClick={() => router.push(`produto/${id}`)}
        src={image[0].url}
        width={148}
        height={184}
      />
      <Text11 style={{ marginTop: 6 }}>{category}</Text11>
      <Text16 style={{ marginTop: 3 }}>{name}</Text16>
      <Text14>{floatToPrice(price)}</Text14>
    </Wrapper>
  );
}
