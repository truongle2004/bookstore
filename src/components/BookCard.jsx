import { CardMedia } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProductId } from '~/redux/features/utils/StoreProductId'
import { formatNumber } from '~/utils/formatNumber'

function BookCard() {
  const listBooks = useSelector((state) => state.ListProducts.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleStoreProduct = (id) => {
    dispatch(setProductId(id))
    navigate(`/product/${id}`)
  }

  return (
    <>
      {listBooks && listBooks.length > 0 ? (
        listBooks.map((product, index) => (
          <Card
            onClick={() => handleStoreProduct(product.id)}
            variant="outlined"
            sx={{
              cursor: 'pointer',
              mx: '20px',
              height: '360px',
              width: '225px',
              margin: '0 2px 8px 2px',
              justifyContent: 'space-around',
              position: 'relative',
              my: '9px',
              border: 'none',
              ':hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
              }
            }}
            key={index}
          >
            <CardMedia component="img" src={`${product.images}`} />
            <CardContent>
              <Typography>{product.title}</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    color: 'red'
                  }}
                >
                  {formatNumber(product.price)}
                  {product.currency}
                </Typography>
                <Typography
                  sx={{
                    borderRadius: '8px',
                    width: '30px',
                    color: 'green'
                  }}
                  fontSize="small"
                >
                  {product.discount}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: 'gray',
                  textDecoration: 'line-through'
                }}
                fontSize="small"
              >
                {formatNumber(product.originalPrice)}
                {product.currency}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  )
}

export default BookCard
