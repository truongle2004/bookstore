import axios from 'axios'

export const RegisterApiCall = (_name, _email, _password) =>
  axios.post('http://localhost:8080/sign-up', {
    name: _name,
    email: _email,
    password: _password
  })
