import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  handleSaveEmailUser,
  handleSaveLocalStorage
} from '~/axios/handleUserServices'
import { loginApiCall } from '~/axios/services'
import { isOpenedDialog } from '~/redux/features/components/OpenDialog'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCloseDialog = () => {
    dispatch(isOpenedDialog(false))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLoginApiCall()
  }
  const handleClose = () => {
    dispatch(isOpenedDialog(false))
  }

  const handleSaveEmail = () => {
    handleSaveEmailUser(email)
  }

  const handleLoginApiCall = async () => {
    const res = await loginApiCall(email, password)
    if (res && res.status === 200) {
      handleSaveEmail()
      handleSaveLocalStorage(res.headers.authorization)
      handleCloseDialog()
      toast.success('Login Successfully')
      setInterval(() => {
        navigate('/home')
        window.location.reload()
      }, 1300)
    } else {
      toast.error('Login Failed')
    }
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
        Login
      </DialogTitle>
      <DialogContent
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <FormControl
          variant="standard"
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: '100%' }}
        >
          <Box>
            <Typography>Enter email</Typography>
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
            <Typography>Enter password</Typography>
            <TextField
              type="password"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
          </Box>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button type="submit">Login</Button>
          </DialogActions>
        </FormControl>
      </DialogContent>
    </Box>
  )
}
export default LoginForm
