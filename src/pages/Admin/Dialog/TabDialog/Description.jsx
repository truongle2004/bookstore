import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function Description(props) {
  const { productData } = props
  return (
    <Box>
      <Typography>Book description</Typography>
      <TextField id="outlined-multiline-static" multiline rows={4} fullWidth />
    </Box>
  )
}
