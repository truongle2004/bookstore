import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function Image(props) {
  const { formValues, handleChange } = props

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography>Images Url</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="coverType"
        name="coverType"
        label={formValues.img}
        type="text"
        fullWidth
        variant="outlined"
        onPaste={handleChange}
      />
      <img
        src={`${formValues.img}`}
        style={{
          obectFit: 'cover',
          height: 200,
          width: 200
        }}
      />
    </Box>
  )
}
