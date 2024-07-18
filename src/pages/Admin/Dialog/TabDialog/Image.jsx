import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export default function Image(props) {
  const { imgUrl } = props
  const [url, setUrl] = useState(imgUrl)

  const handleSetImage = (value) => {
    setUrl(value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: (theme) => theme.widthTextField,
        alignItems: 'center'
      }}
    >
      <Typography>Images Url</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="coverType"
        name="coverType"
        label={url}
        type="text"
        fullWidth
        variant="outlined"
        onPaste={(e) => handleSetImage(e.target.value)}
      />
      <img
        src={`${url}`}
        style={{
          objectFit: 'cover',
          height: 200,
          width: 200
        }}
      />
    </Box>
  )
}
