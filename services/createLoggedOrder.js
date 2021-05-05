import strapiInstance from './instance';
import Cookies from 'js-cookie';

export default async function createOrder({ cartInfo }) {
  const jwt = Cookies.get('jwt');

  const { data: user } = await strapiInstance.get('/users/me', {
    headers: {
      authorization: `Bearer ${jwt}`,
    },
  });


  const { data: payment } = await strapiInstance.post('/payments', {
    status: 'PENDENTE',
  });

  const { data: order } = await strapiInstance.post('/orders', {
    user: user.id,
    payment: payment.id,
    status: 'SOLICITADO',
    value: cartInfo.total,
  });

  const orderItemPromises = cartInfo.orderItems.map(async (o) => {
    const { data } = await strapiInstance.post('/order-items', {
      name: o.name,
      amount: o.quantity,
      value: o.itemTotal,
      product: o.id,
      order: order.id,
    });
    return data;
  });

  await Promise.all(orderItemPromises);

  return order.id;
}
