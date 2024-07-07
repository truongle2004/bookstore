import { Box, Container, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Card from '@mui/material/Card'

function CartPage() {
  const [quantity, setQuantity] = useState(0)
  return (
    <Container
      sx={{
        marginTop: 3
      }}
    >
      <Typography
        sx={{
          fontSize: 25,
          marginBottom: 2
        }}
      >
        <strong>Cart ({quantity} product)</strong>
      </Typography>
      <Card
        sx={{
          height: 400,
          boxShadow: 3
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <img
            alt="images"
            style={{
              width: '160px',
              height: '160px'
            }}
            src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
          />
          <Typography
            sx={{
              marginTop: 2
            }}
          >
            There is no product in your cart
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{
              marginTop: 3
            }}
            href="/home"
          >
            Buy Now
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default CartPage
