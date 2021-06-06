import { useRouter } from 'next/router';
import { useCart } from 'react-use-cart';
import React from 'react';
import styled from 'styled-components';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import { Text34, Text11 } from '~/components/text';
import UserForm from '~/components/delivery-form/user';
import CepForm from '~/components/delivery-form/cep';
import createOrder from '~/services/createOrder';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

export default function Delivery() {
  const router = useRouter();
  const cart = useCart();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [cep, setCep] = React.useState('');
  const [deliveryInfo, setDeliveryInfo] = React.useState({});

  const disabled =
    !userInfo.name ||
    !userInfo.phone ||
    !userInfo.email ||
    !userInfo.password ||
    !deliveryInfo.cep ||
    !deliveryInfo.street ||
    !deliveryInfo.neighborhood ||
    !deliveryInfo.state ||
    !deliveryInfo.city ||
    !deliveryInfo.complement ||
    !deliveryInfo.number;

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleDeliveryInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cep') {
      setCep(value);
      return;
    }
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setError('');
    console.log(cart.cartTotal);
    const cartInfo = {
      total: cart.cartTotal + 20,
      orderItems: cart.items,
    };

    // createOrder({ userInfo, deliveryInfo, cartInfo })
    //   .then((r) => {
    //     localStorage.setItem('orderId', r);
    //     router.push('/pagamento');
    //     setLoading(false);
    //     setError('');
    //   })
    //   .catch(() => {
    //     setError('Email já está em uso');
    //     setLoading(false);
    //   });
  };

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Entrega</Text34>
        <UserForm handleChange={handleUserInfoChange} userInfo={userInfo} />
        <CepForm
          handleChange={handleDeliveryInfoChange}
          deliveryInfo={deliveryInfo}
          cep={cep}
          setDeliveryInfo={setDeliveryInfo}
        />
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          {error && (
            <Text11 style={{ marginBottom: 8, color: 'red' }}>{error}</Text11>
          )}
          <Button
            loading={loading}
            disabled={disabled}
            onClick={loading || disabled ? () => {} : handleSubmit}
            text="Continuar"
          />
        </Fixed>
      </div>
    </>
  );
}
