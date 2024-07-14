const handleSaveLocalStorage = (token) => {
  localStorage.setItem('token', token)
}
const handleGetToken = () => localStorage.getItem('token')

const handleRemoveToken = () => localStorage.removeItem('token')

const handleSaveEmailUser = (email) => localStorage.setItem('email', email)

const handleGetEmailUser = () => localStorage.getItem('email')

export {
  handleGetToken,
  handleSaveLocalStorage,
  handleRemoveToken,
  handleSaveEmailUser,
  handleGetEmailUser
}
