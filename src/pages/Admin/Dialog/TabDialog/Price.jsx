import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

export default function Price(props) {
  const { productData } = props
  return (
    <Box
      sx={{
        width: (theme) => theme.widthTextField
      }}
    >
      <Typography>Price</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="price"
        name="price"
        label={productData.price}
        type="text"
        fullWidth
        variant="outlined"
      />

      <Typography>originalPrice</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="publisher"
        name="publisher"
        label={productData.originalPrice}
        type="text"
        fullWidth
        variant="outlined"
      />
      <Typography>Discount</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="publishedBy"
        name="publishedBy"
        label={productData.discount}
        type="text"
        fullWidth
        variant="outlined"
      />
      <Typography>currency</Typography>
      <TextField
        id="outlined-select-currency"
        select
        label={productData.currency}
        margin="dense"
        fullWidth
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
