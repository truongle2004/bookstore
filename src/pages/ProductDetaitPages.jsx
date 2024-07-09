import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bookInfo } from '~/publics'
import { addToCart } from '~/redux/features/Products'
import {
  ProductActions,
  ProductDetails,
  ProductQuantity
} from '~/components/BookDetails'
import { useQuantity } from '~/hooks'

function ProductDetailPages() {
  const dispatch = useDispatch()
  const handleAddProductToCart = (product) => {
    dispatch(addToCart(product))
  }
  const { quantity, handleIncrease, handleReduce } = useQuantity()

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          height: '590px',
          width: '1230px',
          padding: '16px 16px 25px 16px',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
          boxShadow: 10
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              marginRight: 3
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
              <ProductActions />
            </Stack>
          </Box>
          <Box>
            <ProductDetails
              title={bookInfo.title}
              publisher={bookInfo.publisher}
              publishedBy={bookInfo.publishedBy}
              author={bookInfo.author}
              coverType={bookInfo.coverType}
              price={bookInfo.price}
              originalPrice={bookInfo.originalPrice}
              currency={bookInfo.currency}
              discount={bookInfo.discount}
            />
            <ProductQuantity
              quantity={quantity}
              handleIncrease={handleIncrease}
              handleReduce={handleReduce}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default ProductDetailPages
