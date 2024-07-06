import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  return (
    <Box>
      <Stack>
        <ShoppingCartIcon
          onClick={() => {
            navigate('/checkout/cart')
          }}
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
    </Box>
  )
}

export default Cart
