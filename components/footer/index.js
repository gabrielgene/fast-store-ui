import styled from 'styled-components';
import Icon from '~/components/icon';

import { Text16, Text11 } from '~/components/text';

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

export default function Footer() {
  return (
    <Wrapper>
      <div>
        <Text16 style={{ fontWeight: 900, margin: 4 }}>Contato</Text16>
        <a href="tel:+55 (21)99144-5368" target="_blank">
          <Text11 style={{ color: '#9B9B9B' }}>+55 (21)99144-5368</Text11>
        </a>
      </div>
      <IconWrapper>
        <a href="https://www.instagram.com/lojabeandare/" target="_blank">
          <Icon name="insta" />
        </a>
        <div style={{ marginRight: 16 }}></div>
        <a href="https://wa.me/5521991445368" target="_blank">
          <Icon name="whats" />
        </a>
      </IconWrapper>
    </Wrapper>
  );
}
