export function floatToPrice(price) {
  return `R$ ${`${price.toFixed(2)}`.replace('.', ',')}`;
}
