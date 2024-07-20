import { addProductToCartApiCall } from '../services'

const handleSaveLocalStorage = (token) => {
  localStorage.setItem('token', token)
}
const handleGetToken = () => localStorage.getItem('token')

const handleRemoveToken = () => localStorage.removeItem('token')

const handleSaveEmailUser = (email) => localStorage.setItem('email', email)

const handleGetEmailUser = () => localStorage.getItem('email')

const handleRemoveEmailUser = () => localStorage.removeItem('email')

const handleSaveIdUser = (id) => localStorage.setItem('id', id)

const handleGetIdUser = () => localStorage.getItem('id')

const handleSetRoleUser = (role) => localStorage.setItem('role', role)

const handleGetRoleUser = () => localStorage.getItem('role')

export {
  handleGetRoleUser,
  handleSetRoleUser,
  handleGetIdUser,
  handleSaveIdUser,
  handleGetToken,
  handleSaveLocalStorage,
  handleRemoveToken,
  handleSaveEmailUser,
  handleGetEmailUser,
  handleRemoveEmailUser
}
