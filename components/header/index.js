import { useRouter } from 'next/router';
import styled from 'styled-components';
import Icon from '~/components/icon';
import If from '~/components/if';
import { Text18 } from '~/components/text';

const Wrapper = styled.div`
  height: 58px;
  display: flex;
  padding: 12px;
  align-items: center;
  ${({ back }) => {
    return back
            ? `justify-content: space-between;`
        : `justify-content: center;`;
  }};
  background-color: #f9f9f9;
`;

const Spacer = styled.div`
  height: 24px;
  width: 24px;
`;

export default function Header({ title, back }) {
  const router = useRouter();
  return (
    <Wrapper back={back}>
      <If condition={!!back}>
        <Icon active onClick={() => router.back()} icon="back" />
      </If>
      <Text18>{title}</Text18>
      <Spacer />
    </Wrapper>
  );
}
