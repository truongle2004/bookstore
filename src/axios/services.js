import axios from 'axios'
import { handleGetToken } from './handleUserServices'

const baseURL = import.meta.env.VITE_BASE_URL
const authenticationURL = import.meta.env.VITE_URL_TOKEN_CUSTOMER

const registerApiCall = (_name, _email, _password) => {
  return axios.post(baseURL + import.meta.env.VITE_REGISTER_URL, {
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

const addProductToCartApiCall = (_productId) => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }

  const url = `${baseURL}${authenticationURL}${import.meta.env.VITE_ADD_CART_URL}/${_productId}`
  const headers = {
    Authorization: token
  }
  const data = { productId: _productId }

  return axios.post(url, data, { headers })
}

const fetchAllProductInCart = () => {
  const token = handleGetToken()
  if (!token) {
    return Promise.reject('No token found')
  }

  const url = `${baseURL}${authenticationURL}${import.meta.env.VITE_ADD_CART_URL}`
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

  const url = `${baseURL}${import.meta.env.VITE_URL_TOKEN_CUSTOMER}/product`
  const headers = {
    Authorization: token
  }

  return axios.get(url, { headers })
}

export {
  fetchAllProductInCart,
  registerApiCall,
  loginApiCall,
  addProductToCartApiCall,
  fetchAllProduct
}
