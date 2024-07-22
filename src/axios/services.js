import axios from 'axios'
import { handleGetToken } from './handleUserServices'

const registerUrl = import.meta.env.VITE_REGISTER_URL
const loginUrl = import.meta.env.VITE_LOGIN_URL
const productUrl = import.meta.env.VITE_PRODUCT_URL
const cartUrl = import.meta.env.VITE_CART_URL
const orderUrl = import.meta.env.VITE_ORDER_URL

const registerApiCall = (_name, _email, _password) => {
  return axios.post(registerUrl, {
    username: _name,
    email: _email,
    password: _password
  })
}

const loginApiCall = (_email, _password) => {
  return axios.post(loginUrl, {
    username: _email,
    password: _password
  })
}

const addProductToCartApiCall = (id) => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }

  const url = `${cartUrl}/${id}`
  const headers = {
    Authorization: token
  }
  const data = { productId: id }

  return axios.post(url, data, { headers })
}

const fetchAllProductInCart = () => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }

  const url = cartUrl
  const headers = {
    Authorization: token
  }

  return axios.get(url, { headers })
}

const fetchAllProduct = () => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }

  const url = productUrl
  const headers = {
    Authorization: token
  }

  return axios.get(url, { headers })
}

const removeProductFromCart = (id) => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }
  const url = `${cartUrl}/delete/${id}`

  const headers = {
    Authorization: token
  }

  return axios.delete(url, { headers })
}

const addProductOrder = (userInfo, list) => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }
  const url = orderUrl

  const headers = {
    Authorization: token
  }

  const data = {
    fullName: userInfo.fullName,
    fullAddress: userInfo.fullAddress,
    contactNumber: userInfo.phoneNumber,
    product: list
  }
  return axios.post(url, data, { headers })
}

const removeProduct = (id) => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }
  const url = productUrl

  const headers = {
    Authorization: token
  }
  return axios.post(url, id, { headers })
}
export {
  removeProduct,
  addProductOrder,
  removeProductFromCart,
  fetchAllProductInCart,
  registerApiCall,
  loginApiCall,
  addProductToCartApiCall,
  fetchAllProduct
}
