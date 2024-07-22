import { toast } from 'react-toastify'
import { addProductOrder, removeProduct } from '../services'

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

const handleAddToOrder = async (user_info, list) => {
  const res = await addProductOrder(user_info, list)
  try {
    if (res) {
      toast.success('Buy successfully')
    }
  } catch (err) {
    console.error('err: ', err)
  }
}

const handleRemoveProduct = async (id) => {
  const res = await removeProduct(id)
  if (res.status === 204) {
    toast.success('Remove Item successfully')
    return
  }
  toast.error('Cannot remove the item!')
}

export {
  handleRemoveProduct,
  handleAddToOrder,
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
