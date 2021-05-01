import styled from 'styled-components';
import Badge from '~/components/badge';

const Wrapper = styled.div`
  padding: 10px 16px;
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
`;

const FilterBadge = styled(Badge)`
  margin-right: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default function Filter() {
  return (
    <Wrapper>
      <FilterBadge text="Blusa" />
      <FilterBadge text="Vestido" />
    </Wrapper>
  );
}
