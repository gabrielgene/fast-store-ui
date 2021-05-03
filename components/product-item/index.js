import styled from 'styled-components';
import { useRouter } from 'next/router';
import { floatToPrice } from '~/utils/price';
import ProductImage from '~/components/product-image';
import { Text14, Text16 } from '~/components/text';
import Badge from '~/components/badge';
import If from '~/components/if';

const Wrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(ProductImage)`
  border-radius: 6px;
  object-fit: cover;
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
  slug,
  news,
  style,
  imageUrl,
}) {
  const router = useRouter();

  return (
    <Wrapper style={style}>
      <If condition={!!news}>
        <ProductBadge text="NEW" />
      </If>
      <StyledImage
        onClick={() => router.push(`produto/${slug}`)}
        // src={image[0].url}
        src={imageUrl}
        width={160}
        height={200}
      />
      <Text16 style={{ marginTop: 4, width: 148 }}>{name}</Text16>
      <Text14 style={{ marginTop: 4, width: 148 }}>
        {floatToPrice(price)}
      </Text14>
    </Wrapper>
  );
}
