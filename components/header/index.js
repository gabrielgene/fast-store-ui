import styled from 'styled-components';
import Icon from '~/components/icon';
import { Text18 } from '~/components/text';

const Wrapper = styled.div`
  height: 58px;
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

const Spacer = styled.div`
  height: 24px;
  width: 24px;
`;

export default function Header({ title }) {
  return (
    <Wrapper>
      <Icon icon="back" />
      <Text18>{title}</Text18>
      <Spacer />
    </Wrapper>
  );
}
