import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { registerApiCall } from '~/axios/services'
import { isOpenedDialog } from '~/redux/features/components/OpenDialog'
import { setOpenLogin } from '~/redux/features/services/UserServiceIndex'
import { checkConfirmPassword } from '~/utils/passwordValidation'
import checkUsername from '~/utils/userNameValidation'
import { checkEmail } from '~/utils/emailValidation'
import { checkPassword } from '~/utils/passwordValidation'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()

  const handleRegisterApiCall = async () => {
    try {
      console.log('is called');
      const res = await registerApiCall(username, email, password)
      console.log(res);
      if (res.data && res.status == 200) {
        toast.success('Register Successfully')
        dispatch(isOpenedDialog(false))
        setInterval(() => {
          window.location.reload()
          dispatch(setOpenLogin())
          dispatch(isOpenedDialog(true))
        }, 1000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //const isPassedChecking =
    //  checkUsername(username) &&
    //  checkEmail(email) &&
    //  checkPassword(password) &&
    //  checkConfirmPassword(confirmPassword, password)
    //    ? true
    //    : false
    //if (isPassedChecking) {
      handleRegisterApiCall(username, email, password)
    //}
  }

  const handleClose = () => {
    dispatch(isOpenedDialog(false))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <DialogTitle
        sx={{
          textAlign: 'center'
        }}
      >
        Register
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column', // Make sure content is in a column
          alignItems: 'center',
          width: '100%'
        }}
      >
        <form
          style={{ width: '100%' }} // Ensure form takes full width
        >
          <Box>
            <Typography>Enter Email</Typography>
            <TextField
              type="email"
              fullWidth
              autoFocus
              required
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <Typography>Enter User Name</Typography>
            <TextField
              type="text"
              fullWidth
              required
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box>
            <Typography>Enter Password</Typography>
            <TextField
              type="password"
              fullWidth
              required
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box>
            <Typography>Enter Password Again</Typography>
            <TextField
              type="password"
              fullWidth
              required
              margin="normal"
              error={!checkConfirmPassword}
              helperText={!checkConfirmPassword ? 'password not match' : ''}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Box>
  )
}

export default RegisterForm
