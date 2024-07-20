import { toast } from 'react-toastify'
import { addProductOrder } from '../services'

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

export {
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
