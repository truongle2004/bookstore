import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useDispatch } from 'react-redux'
import { ProductDetails, ProductQuantity } from '~/components/BookDetails'
import { addToCart } from '~/redux/features/ListProducts'
import { useSelector } from 'react-redux'
import theme from '~/theme'

function ProductDetailPages() {
  // const handleAddProductToCart = (id) => {
  //   dispatch(addToCart(id))
  // }
  const dispatch = useDispatch()
  //const listBooks = useSelector((state) => state.ListProducts.products)
  return (
    <Container
      maxWidth={'xl'}
      sx={{
        mt: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          height: '590px',
          width: '1230px',
          p: '16px 16px 25px 16px',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
          boxShadow: 10
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              mr: 3
            }}
          >
            <Stack alignItems="center" spacing={4}>
              <img
                src="https://cdn0.fahasa.com/media/catalog/product/z/5/z5569703671543_9999563d8928c9cca25d572ab6764328.jpg"
                style={{
                  width: '388px',
                  height: '400px'
                }}
              />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  color="error"
                  sx={theme.buttonStyle}
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to cart
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={theme.buttonStyle}
                >
                  Buy now
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <ProductDetails />
            <ProductQuantity />
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default ProductDetailPages
