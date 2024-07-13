import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Box,
  Button,
  TextField,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl
} from '@mui/material'
import { isOpenedDialog } from '~/redux/features/OpenDialog'
import checkUsername from '~/utils/userNameValidation'
import { checkEmail } from '~/utils/emailValidation'
import { checkConfirmPassword as checkConfirmPassword } from '~/utils/passwordValidation'
import { RegisterApiCall } from '~/axios/services'
import { toast } from 'react-toastify'
//TODO: check validation + add check secure password
const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [checkConfirmPassword, setCheckConformPassword] = useState('false')
  const dispatch = useDispatch()

  const handleRegisterApiCall = async () => {
    const res = await RegisterApiCall(username, email, password)
    if (res.data && res.status == 200) {
      toast.success('Register Successfully')
    } else {
      toast.error('Register Failed')
    }
  }

  const handleSubmit = () => {
    event.preventDefault()

    if (
      checkUsername(username) &&
      checkEmail(email) &&
      checkConfirmPassword(confirmPassword, password)
    ) {
      handleRegisterApiCall(username, email, password)
    }
  }

  const handleClose = () => {
    dispatch(isOpenedDialog(false))
  }

  return (
    <Box>
      <DialogTitle>Register</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <FormControl
          variant="standard"
          component="form"
          onSubmit={handleSubmit}
        >
          <Box>
            <Typography>Enter Email</Typography>
            <TextField
              sx={{ width: 320 }}
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
              sx={{ width: 320 }}
              type="text"
              fullWidth
              autoFocus
              required
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box>
            <Typography>Enter Password</Typography>
            <TextField
              sx={{ width: 320 }}
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
              sx={{ width: 320 }}
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
            <Button type="submit">Submit</Button>
          </DialogActions>
        </FormControl>
      </DialogContent>
    </Box>
  )
}

export default RegisterForm
