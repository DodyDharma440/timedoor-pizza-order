export const currencyFormat = (value: number | string = 0) => {
  const numberedValue = Number(value)
  return numberedValue
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .slice(0, -3)
}
