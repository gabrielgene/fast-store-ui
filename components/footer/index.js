import styled from 'styled-components';
import Icon from '~/components/icon';

import { Text16 } from '~/components/text';

const Wrapper = styled.div`
  background: #ffffff;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  height: 13px;
  font-style: normal;
  size: 11px;
  line-height: 13px;
  color: #9b9b9b;
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>
        <Text16 style={{ fontWeight: 900 }}>Contato</Text16>
        <Link href="https://www.google.com/">+55 (21)99144-5368</Link>
      </div>
      <IconWrapper>
        <Icon name="insta" />
        <div style={{ marginRight: 16 }}></div>
        <Icon name="whats" />
      </IconWrapper>
    </Wrapper>
  );
}
