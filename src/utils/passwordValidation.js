import { valueValidation } from '~/constant'

const isPasswordSecure = (password) => {
  const re = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  )
  return re.test(password)
}

export const checkPassword = (passwordInput) => {
  const password = passwordInput.trim()
  if (!isPasswordSecure(password)) {
    return false
  }
  return true
}
export const checkConfirmPassword = (passwordInput, matchPasswordInput) => {
  return passwordInput === matchPasswordInput
}
