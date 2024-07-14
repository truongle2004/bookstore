import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { handleSaveLocalStorage } from '~/axios/handleUserServices'
import { loginApiCall } from '~/axios/services'
import { isOpenedDialog } from '~/redux/features/OpenDialog'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    handleLoginApiCall()
  }
  const handleClose = () => {
    dispatch(isOpenedDialog(false))
  }

  const handleLoginApiCall = async () => {
    const res = await loginApiCall(email, password)
    if (res && res.status === 200) {
      handleSaveLocalStorage(res.headers.authorization)
      toast.success('Login Successfully')
    } else {
      toast.error('Login Failed')
    }
  }
  return (
    <Box>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <FormControl variant="standard">
          <form action="" onSubmit={handleSubmit}>
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
                sx={{
                  width: 320
                }}
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
          </form>
        </FormControl>
      </DialogContent>
    </Box>
  )
}
export default LoginForm
