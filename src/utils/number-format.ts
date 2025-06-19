export const currencyFormat = (
  value: number | string = 0,
  options?: {
    trimZero?: boolean
  },
) => {
  const numberedValue = Number(value)
  const result = numberedValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  if (options?.trimZero) {
    return result.replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1')
  }
  return result
}
