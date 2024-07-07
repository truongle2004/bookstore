import { valueValidation } from '~/constant'

const isBetween = (value, min, max) => {
  return value >= min && value <= max
}

const checkUsername = (username) => {
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

export default checkUsername
