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
  const { cartTotal, emptyCart } = cart;
  const [orderId, setOrderId] = React.useState('');

  React.useEffect(() => {
    const data = localStorage.getItem('orderId');
    setOrderId(data);
  }, []);

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
        <StyledText14>Pedido: #{orderId}</StyledText14>
        <Card>
          <StyledText14>
            Olá! Obrigada por adquirir a sua peça Beandare!
          </StyledText14>
          <StyledText14>
            Segue abaixo nossas contas para pagamento:
          </StyledText14>
          <br />
          <StyledText14>NUBANK</StyledText14>
          <StyledText14>Agência:</StyledText14>
          <StyledText14>Conta corrente:</StyledText14>
          <StyledText14>
            Titular: Juliana Jennifer Gomes de Oliveira
          </StyledText14>
          <StyledText14>CPF: 857.851.075-54</StyledText14>
          <br />
          <StyledText14>PIX NUBANK: 85785107554</StyledText14>
          <br />
          <StyledText14>
            O próximo passo é enviar o seu nome completo, número do pedido e
            comprovante do pagamento para o nosso Whatsapp, clicando no botão
            abaixo ♡
          </StyledText14>
        </Card>
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <a
            target="_blank"
            href={`https://wa.me/5571992229059?text=Ol%C3%A1%2C+segue+comprovante+do+pedido+%23${orderId}♡`}
          >
            <Button
              text="Enviar comprovante"
              onClick={() => {
                localStorage.setItem('orderId', '');
                emptyCart();
                router.push(`/pedido/${orderId}`);
              }}
            />
          </a>
        </Fixed>
      </div>
    </>
  );
}
