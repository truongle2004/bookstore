import axios from 'axios'
import { handleGetToken } from './handleUserServices'

const registerUrl = import.meta.env.VITE_REGISTER_URL
const loginUrl = import.meta.env.VITE_LOGIN_URL
const ProductUrl = import.meta.env.VITE_PRODUCT_URL
const CartUrl = import.meta.env.VITE_CART_URL

const registerApiCall = (_name, _email, _password) => {
  return axios.post(registerUrl, {
    name: _name,
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

  const url = `${CartUrl}/${id}`
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

  const url = CartUrl
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

  const url = ProductUrl
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
  const url = `${CartUrl}/delete/${id}`

  const headers = {
    Authorization: token
  }

  return axios.delete(url, { headers })
}

//const addProductOrder = ()
export {
  removeProductFromCart,
  fetchAllProductInCart,
  registerApiCall,
  loginApiCall,
  addProductToCartApiCall,
  fetchAllProduct
}
