import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function Description(props) {
  const { productData } = props
  return (
    <Box>
      <Typography>Images Url</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="coverType"
        name="coverType"
        label={productData.img}
        type="text"
        fullWidth
        variant="outlined"
      />
    </Box>
  )
}
