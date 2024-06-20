export function convertValueToCurrency(value: number) {
  return new Intl.NumberFormat('pb-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)
}
