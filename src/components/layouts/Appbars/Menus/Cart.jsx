import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

function Cart() {
  return (
    <Stack>
      <ShoppingCartIcon
        sx={{
          cursor: 'pointer'
        }}
      />
      <Typography
        sx={{
          fontSize: '12px'
        }}
      >
        Cart
      </Typography>
    </Stack>
  )
}

export default Cart
