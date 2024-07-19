import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const currencies = [
  {
    value: 'VIETNAMESE DONG',
    label: '₫'
  },
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
  const { formValues, handleChange } = props
  return (
    <Box>
      <Typography>Price</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="price"
        name="price"
        label={formValues.price}
        onChange={handleChange}
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
        label={formValues.originalPrice}
        onChange={handleChange}
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
        label={formValues.discount}
        onChange={handleChange}
        type="text"
        fullWidth
        variant="outlined"
      />
      <Typography>currency</Typography>
      <TextField
        id="outlined-select-currency"
        select
        defaultValue="VIETNAMESE DONG"
        label={formValues.currency}
        onChange={handleChange}
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
