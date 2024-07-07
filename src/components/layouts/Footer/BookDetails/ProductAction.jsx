/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import Stack from '@mui/material/Stack'
import theme from '~/theme'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'

const ProductActions = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="error"
          sx={theme.buttonStyle}
          startIcon={<ShoppingCartIcon />}
        >
          Add to cart
        </Button>
        <Button variant="contained" color="error" sx={theme.buttonStyle}>
          Buy now
        </Button>
      </Stack>
    </>
  )
}

export default React.memo(ProductActions)
