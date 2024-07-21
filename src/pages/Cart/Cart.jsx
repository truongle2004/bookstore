import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductInCart } from '~/redux/features/components/ListProducts'
import ListItem from './ListItems/ListItem'
import CartItemProvider from '~/providers/RemoveItemProvider'

function Cart() {
  const dispatch = useDispatch()
  const listProducts = useSelector((state) => state.ListProducts.productsCart)

  useEffect(() => {
    dispatch(fetchProductInCart())
  }, [dispatch])
  return (
    <>
      <Container
        sx={{
          mt: 3,
          mb: 6
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            mb: 2
          }}
        >
          <strong>Cart ({listProducts.length} product)</strong>
        </Typography>
        <Box
          sx={{
            boxShadow: 3,
            mt: '20px'
          }}
        >
          {listProducts.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                py: 10
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
                  mt: 2
                }}
              >
                There is no product in your cart
              </Typography>
              <Button
                variant="contained"
                color="error"
                sx={{
                  mt: 3
                }}
                href="/home"
              >
                Buy Now
              </Button>
            </Box>
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Products</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Bills</TableCell>
                  <TableCell align="right">Operator</TableCell>
                </TableRow>
              </TableHead>
              <CartItemProvider>
                <ListItem />
              </CartItemProvider>
            </Table>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Cart
