import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function Author() {
  return (
    <Box>
      <Typography>Author Description</Typography>
      <TextField id="outlined-multiline-static" multiline rows={4} fullWidth />
    </Box>
  )
}
