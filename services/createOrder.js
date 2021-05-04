import strapiInstance from './instance';

export default async function createOrder({
  userInfo,
  deliveryInfo,
  cartInfo,
}) {
  const {
    data: { jwt, user },
  } = await strapiInstance.post('/auth/local/register', {
    username: userInfo.email,
    email: userInfo.email,
    password: userInfo.password,
    name: userInfo.name,
  });

  localStorage.setItem('jwt', jwt);

  const { data: address } = await strapiInstance.post(
    '/addresses',
    deliveryInfo
  );

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

  await strapiInstance.put(`/users/${user.id}`, {
    addresses: [`${address.id}`],
    phone: userInfo.phone,
    order: order.id,
  });

  return order.id;
}
