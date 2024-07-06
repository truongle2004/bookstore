/* eslint-disable no-useless-escape */
export const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export const isPasswordSecure = (password) => {
  const re = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  )
  return re.test(password)
}

export const valueValidation = new Map([
  ['email', true],
  ['username', true],
  ['password', true]
])

export const isBetween = (value, min, max) => {
  return value >= min && value <= max
}

export const checkUsername = (username) => {
  let valid = true
  const min = 3,
    max = 25
  const trimmedUsername = username.trim()

  if (!isBetween(trimmedUsername.length, min, max)) {
    valueValidation.set('username', false)
    valid = false
  } else {
    valueValidation.set('username', true)
  }
  return valid
}

export const checkEmail = (email) => {
  let valid = true
  const trimmedEmail = email.trim()

  if (!isEmailValid(trimmedEmail)) {
    valueValidation.set('email', false)
    valid = false
  } else {
    valueValidation.set('email', true)
  }
  return valid
}

export const checkCofirmPassword = (password, matchPassword) => {
  let valid = true
  password = password.trim()
  matchPassword = matchPassword.trim()
  if (password !== matchPassword) {
    valueValidation.current.set('password', false)
  } else {
    valueValidation.current.set('password', true)
    valid = true
  }
  return valid
}
