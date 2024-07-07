/* eslint-disable no-useless-escape */
import { valueValidation } from '~/constant'

export const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
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
