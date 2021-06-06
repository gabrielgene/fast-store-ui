import styled from 'styled-components';
import Icon from '~/components/icon';

import { Text16, Text11 } from '~/components/text';

const Wrapper = styled.div`
  background: #ffffff;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  ${({ fixed }) => {
    if (fixed) {
      return `
          position: fixed;
          bottom: 0;
          width: 100%;
        `;
    }
  }}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function Footer({ fixed }) {
  return (
    <>
      <div style={{ marginTop: fixed && 88 }} />
      <Wrapper fixed={fixed}>
        <div>
          <Text16 style={{ fontWeight: 900, margin: 4 }}>Dúvidas?</Text16>
          <a href="tel:+5571992621790" target="_blank">
            <Text11 style={{ color: '#9B9B9B' }}>+55 (71)99262-1790</Text11>
          </a>
        </div>
        <IconWrapper>
          <a href="https://www.instagram.com/lojabeandare/" target="_blank">
            <Icon name="insta" />
          </a>
          <div style={{ marginRight: 16 }}></div>
          <a href="https://wa.me/5571992621790" target="_blank">
            <Icon name="whats" />
          </a>
        </IconWrapper>
      </Wrapper>
    </>
  );
}
