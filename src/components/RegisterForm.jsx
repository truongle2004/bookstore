import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

function RegisterForm() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState('')
  const handleSubmit = () => {}
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
                  width: 280
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
                  width: 280
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
                  width: 280
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
                  width: 280
                }}
                type="password"
                fullWidth
                required
                onChange={(e) => setMatchPassword(e.target.value)}
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
