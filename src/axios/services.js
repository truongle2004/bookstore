import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

const RegisterApiCall = (_name, _email, _password) =>
  axios.post(baseURL + import.meta.env.VITE_REGISTER_URL, {
    name: _name,
    email: _email,
    password: _password
  })
const LoginApiCall = (_email, _password) =>
  axios.post(baseURL + import.meta.env.VITE_LOGIN_URL, {
    username: _email,
    password: _password
  })

export { RegisterApiCall, LoginApiCall }
