export default function CartItem({ name, itemTotal, quantity }) {
  return (
    <>
      <div>{name}</div>
      <div>Preço: {itemTotal}</div>
      <div>Quantidade: {quantity}</div>
    </>
  );
}
