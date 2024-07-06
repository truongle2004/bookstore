import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import { useState } from 'react'
import {
  checkCofirmPassword,
  checkEmail,
  checkUsername,
  valueValidation
} from '~/constant/constant'

function RegisterForm() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {
    if (
      checkUsername(username) &&
      checkEmail(email) &&
      checkCofirmPassword(password, confirmPassword)
    ) {
      // to-do somethings
    } else {
      valueValidation.forEach((key, value) => {
        if (value === false) {
          // to-do somethings
        }
      })
    }
  }
  const handleClose = () => {}
  return (
    <Box>
      <DialogTitle>Register</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex'
        }}
      >
        <FormControl variant="standard">
          <form onSubmit={handleSubmit}>
            <Box>
              <Typography>Enter Email</Typography>
              <TextField
                sx={{
                  width: 320
                }}
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
                sx={{
                  width: 320
                }}
                type="text"
                fullWidth
                autoFocus
                required
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
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
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box>
              <Typography>Enter Password Again</Typography>
              <TextField
                sx={{
                  width: 320
                }}
                type="password"
                fullWidth
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                margin="normal"
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </FormControl>
      </DialogContent>
    </Box>
  )
}
export default RegisterForm
