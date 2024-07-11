import { Button, Typography } from '@mui/material'
import { formatNumber } from '~/constant'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useSelector } from 'react-redux'

// TODO add props value and display value
// TODO add total cart products
const CartFooterCheckout = () => {
  const totalProducts = useSelector(
    (state) => state.countSelect.productsSelected
  )

  const CartMoney = useSelector((state) => state.cartMoney.CartMoney)

  return (
    <Container>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
        elevation={3}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <Checkbox color="success" />
          <Typography>Select all (16)</Typography>
          <Button variant="contained" color="primary">
            Remove All
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>
            Total products ({totalProducts} product): {formatNumber(CartMoney)}d
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{
              width: '210px'
            }}
          >
            Buy
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default CartFooterCheckout
