import { Button, Typography } from '@mui/material'
import { formatNumber } from '~/utils/formatNumber'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllItems } from '~/redux/features/components/ListProducts'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { isSelectedAllItem } from '~/redux/features/cart/SelectAllItem'
import { useEffect, useState } from 'react'

// TODO add props value and display value
// TODO add total cart products
const CartFooterCheckout = () => {
  const totalProducts = useSelector(
    (state) => state.countSelect.productsSelected
  )

  const CartMoney = useSelector((state) => state.cartMoney.CartMoney)
  const dispatch = useDispatch()
  const handleRemoveAllItem = () => {
    dispatch(removeAllItems())
  }
  const listBooks = useSelector((state) => state.ListProducts.products)
  const handleCheckboxClick = () => {
    setChecked(!checked)
  }
  const handleSelectAllAction = () => {
    dispatch(isSelectedAllItem(true))
  }

  const handleUnSelectAllAction = () => {
    dispatch(isSelectedAllItem(false))
  }

  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (checked) {
      handleSelectAllAction()
    } else {
      handleUnSelectAllAction()
    }
  })

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
          <Checkbox
            color="success"
            checked={checked}
            onClick={handleCheckboxClick}
          />
          <Typography>Select all ({listBooks.length})</Typography>
          <Button
            startIcon={<DeleteOutlineIcon />}
            variant="contained"
            color="primary"
            onClick={handleRemoveAllItem}
          >
            Remove All
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>
            Total products ({totalProducts} product): {formatNumber(CartMoney)}d
          </Typography>
          <Button
            startIcon={<ShoppingCartIcon />}
            variant="contained"
            href="/user/purchase"
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
