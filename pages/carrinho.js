import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useCart } from 'react-use-cart';
import { floatToPrice } from '~/utils/price';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import { Text34, Text18 } from '~/components/text';
import CartList from '~/components/cart-list';
import ClientOnly from '~/components/client-only';
import createLoggedOrder from '~/services/createLoggedOrder';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export default function Cart() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [logged, setLogged] = React.useState(false);
  const cart = useCart();
  const { items, cartTotal } = cart;

  React.useEffect(() => {
    const jwt = Cookies.get('jwt');
    if (jwt) {
      setLogged(jwt);
    }
  }, []);

  const handleSubmit = () => {
    if (!logged) {
      router.push('/entrega');
    }
    setLoading(true);
    const cartInfo = {
      total: cart.cartTotal,
      orderItems: cart.items,
    };
    createLoggedOrder({ cartInfo })
    .then((r) => {
      localStorage.setItem('orderId', r);
      router.push('/pagamento');
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Carrinho</Text34>
        <ClientOnly>
          <div>{items.length !== 0 && <CartList items={items} />}</div>
        </ClientOnly>
        <Price>
          <Text18 style={{ color: '#9B9B9B' }}>Valor total:</Text18>
          <ClientOnly>
            <Text18 style={{ fontWeight: 'bold' }}>
              {floatToPrice(cartTotal)}
            </Text18>
          </ClientOnly>
        </Price>
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Continuar" onClick={handleSubmit} />
        </Fixed>
      </div>
    </>
  );
}
