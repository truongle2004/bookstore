/* eslint-disable no-useless-escape */
import { valueValidation } from '~/constant'

export const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
export const checkEmail = (email) => {
  const trimmedEmail = email.trim()

  if (!isEmailValid(trimmedEmail)) {
    // valueValidation.set('email', false)
    return false
  }
  return true
}
