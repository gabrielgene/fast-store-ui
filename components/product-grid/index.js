import styled from 'styled-components';
import ProductImage from '~/components/product-image';
import MUIGridList from '@material-ui/core/GridList';
import MUIGridListTile from '@material-ui/core/GridListTile';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  justify-content: space-around;
`;

const GridList = styled(MUIGridList)`
  flex-wrap: nowrap;
  transform: 'translateZ(0)';
`;

export default function ProductGrid({ images }) {
  return (
    <Wrapper>
      <GridList cols={2.5}>
        {images.map((i) => (
          <MUIGridListTile key={i.url}>
            <ProductImage
              src={i.url}
              width={250}
              height={300}
              objectFit="cover"
            />
          </MUIGridListTile>
        ))}
      </GridList>
    </Wrapper>
  );
}
