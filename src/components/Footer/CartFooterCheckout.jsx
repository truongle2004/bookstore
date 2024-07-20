import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Button, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Checkbox from '@mui/material/Checkbox'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BuyItem } from '~/redux/features/cart/BuyItem'
import { isSelectedAllItem } from '~/redux/features/cart/SelectAllItem'
import { isOpenedDialogRequireInfo } from '~/redux/features/components/OpenDialog'
import { formatNumber } from '~/utils/formatNumber'

const CartFooterCheckout = () => {
  const totalProducts = useSelector(
    (state) => state.countSelect.productsSelected
  )

  const navigate = useNavigate()
  const CartMoney = useSelector((state) => state.cartMoney.CartMoney)
  const dispatch = useDispatch()
  const existAddressUser = useSelector((state) => state.userAddress.address)
  const listBooks = useSelector((state) => state.ListProducts.productsCart)
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
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

  const handleOpenDialog = () => {
    dispatch(isOpenedDialogRequireInfo(true))
  }

  const handleBuy = () => {
    if (existAddressUser === '') {
      handleOpenDialog()
      return
    }

    dispatch(BuyItem(true))
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      toast.success('Buy successfully')
      dispatch(BuyItem(false))
      navigate('/user/purchase')
    }, 1000)
  }

  useEffect(() => {
    if (checked) {
      handleSelectAllAction()
    } else {
      handleUnSelectAllAction()
    }
  })

  return (
    <>
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
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
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>
              Total products ({totalProducts} product):
              {formatNumber(CartMoney)}d
            </Typography>
            <Button
              startIcon={<ShoppingCartIcon />}
              variant="contained"
              color="error"
              sx={{
                width: '210px'
              }}
              onClick={handleBuy}
            >
              Buy
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

export default CartFooterCheckout
