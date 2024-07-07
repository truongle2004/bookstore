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
export const checkCofirmPassword = (passwordInput, matchPasswordInput) => {
  let valid = true
  const password = passwordInput.trim()
  const matchPassword = matchPasswordInput.trim()
  if (password !== matchPassword) {
    valueValidation.current.set('password', false)
  } else {
    valueValidation.current.set('password', true)
    valid = true
  }
  return valid
}
