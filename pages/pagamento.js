import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { floatToPrice } from '~/utils/price';
import { useCart } from 'react-use-cart';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import { Text34, Text14 } from '~/components/text';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
`;

const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledText14 = styled(Text14)`
  margin-bottom: 4px;
  font-weight: normal;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
`;

export default function Payment() {
  const router = useRouter();
  const cart = useCart();
  const { cartTotal } = cart;

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Pagamento</Text34>
        <Card style={{ marginBottom: 16 }}>
          <Inline>
            <StyledText14>Frete:</StyledText14>
            <StyledText14>R$10,00</StyledText14>
          </Inline>
          <Inline>
            <StyledText14>Produtos:</StyledText14>
            <StyledText14>{floatToPrice(cartTotal)}</StyledText14>
          </Inline>
          <Divider />
          <Inline style={{ marginTop: 8 }}>
            <StyledText14 style={{ fontWeight: 'bold' }}>Total:</StyledText14>
            <StyledText14 style={{ fontWeight: 'bold' }}>
              {floatToPrice(cartTotal + 10)}
            </StyledText14>
          </Inline>
        </Card>
        <Card>
          <StyledText14>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </StyledText14>
        </Card>
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Finalizar" onClick={() => router.push('/parabens')} />
        </Fixed>
      </div>
    </>
  );
}
