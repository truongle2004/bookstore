import axios from 'axios'
import { handleGetToken } from './handleUserServices'

const baseURL = import.meta.env.VITE_BASE_URL
const authenticationURL = import.meta.env.VITE_URL_TOKEN_CUSTOMER

const registerApiCall = (_name, _email, _password) => {
  return axios.post(`${baseURL}${import.meta.env.VITE_REGISTER_URL}`, {
    name: _name,
    email: _email,
    password: _password
  })
}

const loginApiCall = (_email, _password) => {
  return axios.post(`${baseURL}${import.meta.env.VITE_LOGIN_URL}`, {
    username: _email,
    password: _password
  })
}

const addProductToCartApiCall = (_userId, _productId) => {
  const token = handleGetToken()
  if (token) {
    return axios.post(
      `${authenticationURL}${import.meta.env.VITE_CART_URL}`,
      {
        userId: _userId,
        productId: _productId
      },
      {
        headers: {
          Authorization: `${token}`
        }
      }
    )
  }
  return Promise.reject('No token found')
}

const getProductByUserId = (_userId) => {
  const token = handleGetToken()
  if (token) {
    return axios.get(
      `${authenticationURL}${import.meta.env.VITE_CART_URL}/${_userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }
  return Promise.reject('No token found')
}

export {
  registerApiCall,
  loginApiCall,
  addProductToCartApiCall,
  getProductByUserId
}
