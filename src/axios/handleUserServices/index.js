import { toast } from 'react-toastify'
import { addProductOrder, removeProduct, updateProduct } from '../services'

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

const handleRemoveRole = () => localStorage.removeItem('role')

const handleAddToOrder = async (user_info, list) => {
  const res = await addProductOrder(user_info, list)
  try {
    if (res) {
      toast.success('Buy successfully')
    }
  } catch (err) {
    throw new Error('error:', err)
  }
}

const handleRemoveProduct = async (id) => {
  try {
    const res = await removeProduct(id)
    if (res.status === 204) {
      toast.success('Remove Item successfully')
    }
  } catch (error) {
    const status = error.response?.status || 'Unknown'
    console.error(`Error removing product: ${status}`, error)
    throw new Error({
      status: status,
      error: error.message
    })
  }
}

const handleUpdateProduct = async (data) => {
  try {
    const res = await updateProduct(data)
    if (res.status === 200) {
      toast.success('Update product successfully')
    }
  } catch (err) {
    console.error(`Error update product: ${data}`, err)
    throw new Error(err)
  }
}

export {
  handleUpdateProduct,
  handleRemoveRole,
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
