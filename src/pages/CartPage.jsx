import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import CartItem from './Cart/CartItem'

function CartPage() {
  const listBooks = useSelector((state) => state.userProductsReducer.products)
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
        <strong>Cart ({listBooks.length} product)</strong>
      </Typography>
      <Box
        sx={{
          boxShadow: 3,
          marginTop: '20px'
        }}
      >
        {listBooks.length === 0 ? (
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
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>A basic table example with a caption</caption>
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Bills</TableCell>
                <TableCell align="right">Operator</TableCell>
              </TableRow>
            </TableHead>
            {listBooks.map((value, index) => (
              <CartItem
                key={index}
                image={value.images}
                title={value.title}
                id={value.id}
                originalPrice={value.originalPrice}
                price={value.price}
                currency={value.currency}
              />
            ))}
          </Table>
        )}
      </Box>
    </Container>
  )
}

export default CartPage
