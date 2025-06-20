export const currencyFormat = (
  value: number | string = 0,
  options?: {
    trimZero?: boolean
  },
) => {
  // Make sure the value has `number` type
  const numberedValue = Number(value)
  const result = numberedValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  if (options?.trimZero) {
    // Trim trailing zero
    // Example: from $8.50 to $8.5
    return result.replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1')
  }
  return result
}
