export const valueValidation = new Map([
  ['email', { isValid: false, exception: '' }],
  ['username', { isValid: false, exception: '' }],
  ['password', { isValid: false, exception: '' }]
])

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

