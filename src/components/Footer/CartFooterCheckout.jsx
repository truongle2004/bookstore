import { Button, Typography } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useSelector } from 'react-redux'

// TODO add props value and display value
const CartFooterCheckout = () => {
  const listBooks = useSelector((state) => state.ListProducts.products)

  const handleRemoveAllItem = () => {
    // TODO: do something here
  }
  return (
    <Container>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels={true}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Checkbox />
            <Typography>Select all (16)</Typography>
            <Button variant="contained" color="primary">
              Remove All
            </Button>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Total products (0 product): 0d</Typography>
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
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default CartFooterCheckout
